// update-readme.js
// 这是一个 Node.js 脚本，用于自动更新 README.md 文件中的扩展表格
// 它会读取 package.json 中的 extensionPack 字段，并生成一个 Markdown 格式的表格
// 表格将包含每个扩展的名称、徽章、和选择原因。
// 使用方法：
// 1. 确保在项目根目录下有 package.json 和 README.md 文件。
// 2. 在终端中运行 `node update-readme.js` 来执行脚本。

// 导入 Node.js 内置模块
const fs = require("fs").promises; // 用于文件系统操作 (异步 Promise 版本)
const path = require("path"); // 用于处理文件路径

// 定义文件路径常量
const PACKAGE_JSON_PATH = path.join(__dirname, "package.json"); // package.json 文件路径
const README_PATH = path.join(__dirname, "README.zh-CN.md"); // README.md 文件路径

// 定义 Markdown 表格在 README.md 中的标记
const TABLE_START_MARKER = "<!-- EXTENSIONS_TABLE_START -->"; // 表格开始标记
const TABLE_END_MARKER = "<!-- EXTENSIONS_TABLE_END -->"; // 表格结束标记

// --- 辅助函数 ---

/**
 * 创建一个 Markdown 格式的链接
 * @param {string} text - 链接显示的文本
 * @param {string} url - 链接的目标 URL
 * @returns {string} Markdown 链接字符串, 例如 "[text](url)"
 */
function createMarkdownLink(text, url) {
    return `[${text}](${url})`;
}

/**
 * 创建一个 Markdown 格式的图片
 * @param {string} altText - 图片的 alt 文本
 * @param {string} imageUrl - 图片的源 URL
 * @returns {string} Markdown 图片字符串, 例如 "![alt text](url)"
 */
function createMarkdownImage(altText, imageUrl) {
    return `![${altText}](${imageUrl})`;
}

// --- 核心功能 ---

/**
 * 根据 extensionPack 和 extensionReasons 生成 Markdown 表格字符串
 * @param {string[]} extensionPack - 从 package.json 中获取的扩展 ID 数组
 * @param {Object.<string, string>} extensionReasons - 从 package.json 中获取的扩展选择理由对象
 * @returns {string} 生成的 Markdown 表格字符串
 */
function generateMarkdownTable(extensionPack, extensionReasons) {
    if (!extensionPack || extensionPack.length === 0) {
        return "| ⚠️ package.json 中没有列出扩展。 |\n";
    }

    // 1. 准备所有行的数据，以便后续计算宽度和生成表格
    const headers = {
        id: "Extension ID",
        reason: "Choose Reason",
        badges: "Badges",
    };

    const rowsData = extensionPack.map(extensionId => {
        const marketplaceLink = `https://marketplace.visualstudio.com/items?itemName=${extensionId}`;

        // 列内容
        const idCell = `${extensionId} ${createMarkdownLink("🔗", marketplaceLink)}`;
        const reasonCell = extensionReasons[extensionId] || "N/A"; // 如果没有提供理由，则显示 N/A

        const downloadsBadge = createMarkdownImage(
            "downloads",
            `https://img.shields.io/vscode-marketplace/d/${extensionId}.svg`,
        );
        const ratingBadge = createMarkdownImage(
            "rating",
            `https://img.shields.io/vscode-marketplace/r/${extensionId}.svg`,
        );
        const badgesCell = `${downloadsBadge} ${ratingBadge}`;

        return { id: idCell, reason: reasonCell, badges: badgesCell };
    });

    // 2. 动态计算每列的最大宽度，以格式化原始 Markdown
    const maxWidths = {
        id: Math.max(headers.id.length, ...rowsData.map(row => row.id.length)),
        reason: Math.max(headers.reason.length, ...rowsData.map(row => row.reason.length)),
        // 徽章列的宽度对于对齐也很重要
        badges: Math.max(headers.badges.length, ...rowsData.map(row => row.badges.length)),
    };

    // 3. 构建 Markdown 表格字符串
    // 表头
    const headerRow = `| ${headers.id.padEnd(maxWidths.id)} | ${headers.reason.padEnd(maxWidths.reason)} | ${headers.badges.padEnd(maxWidths.badges)} |`;

    // 分隔线
    const separatorRow = `| ${"-".repeat(maxWidths.id)} | ${"-".repeat(maxWidths.reason)} | ${"-".repeat(maxWidths.badges)} |`;

    // 内容行
    const contentRows = rowsData.map(row => {
        const idCol = row.id.padEnd(maxWidths.id);
        const reasonCol = row.reason.padEnd(maxWidths.reason);
        const badgesCol = row.badges.padEnd(maxWidths.badges);
        return `| ${idCol} | ${reasonCol} | ${badgesCol} |`;
    });

    // 组合完整的表格
    return [headerRow, separatorRow, ...contentRows].join("\n");
}

/**
 * 主函数，用于读取 package.json，生成表格，并更新 README.md
 */
async function updateReadmeWithExtensions() {
    try {
        // 1. 读取 package.json
        const packageJsonContent = await fs.readFile(PACKAGE_JSON_PATH, "utf8");
        const packageData = JSON.parse(packageJsonContent);

        const { extensionPack, extensionChooseReason = {} } = packageData;

        // 2. 验证数据
        if (!extensionPack || !Array.isArray(extensionPack)) {
            console.error("❌ 错误：在 package.json 中未找到 'extensionPack' 字段，或它不是一个数组。");
            return;
        }
        if (typeof extensionChooseReason !== "object" || extensionChooseReason === null) {
            console.error("❌ 错误：package.json 中的 'extensionChooseReason' 字段不是一个对象。");
            return;
        }

        // 3. 生成新的 Markdown 表格
        console.log("🔄 正在根据 package.json 生成扩展表格...");
        const newTableContent = generateMarkdownTable(extensionPack, extensionChooseReason);
        console.log("✅ 表格内容已生成。");

        // 4. 读取 README.md
        const readmeContent = await fs.readFile(README_PATH, "utf8");

        // 5. 查找替换标记
        const startIndex = readmeContent.indexOf(TABLE_START_MARKER);
        const endIndex = readmeContent.indexOf(TABLE_END_MARKER);

        if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
            console.error(
                `❌ 错误：在 README.md 中未找到有效的 '${TABLE_START_MARKER}' 和 '${TABLE_END_MARKER}' 标记。`,
            );
            return;
        }

        // 6. 构建新的 README 内容
        const contentBeforeTable = readmeContent.substring(0, startIndex + TABLE_START_MARKER.length);
        const contentAfterTable = readmeContent.substring(endIndex);

        const updatedReadmeContent = `${contentBeforeTable}\n${newTableContent}\n${contentAfterTable}`;

        // 7. 将更新后的内容写回 README.md
        await fs.writeFile(README_PATH, updatedReadmeContent, "utf8");
        console.log("✅ README.md 文件已成功更新！");
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error(`❌ 错误：解析 package.json 文件失败。请检查文件格式是否正确。`);
        } else if (error instanceof Error && error.name === "ENOENT") {
            console.error(`❌ 错误：找不到文件。请确保 ${PACKAGE_JSON_PATH} 和 ${README_PATH} 都存在。`);
        } else {
            console.error("❌ 执行脚本时发生意外错误：", error);
        }
    }
}

// 执行主函数
updateReadmeWithExtensions();
