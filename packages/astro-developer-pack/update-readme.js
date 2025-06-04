// update-readme.js
// 这是一个 Node.js 脚本，用于自动更新 README.md 文件中的扩展表格
// 它会读取 package.json 中的 extensionPack 字段，并生成一个 Markdown 格式的表格
// 表格将包含每个扩展的名称、版本、下载量和评分徽章。
// 使用方法：
// 1. 确保在项目根目录下有 package.json 和 README.md 文件。
// 2. 在终端中运行 `node update-readme.js` 来执行脚本。

// 导入 Node.js 内置模块
const fs = require("fs").promises; // 用于文件系统操作 (异步 Promise 版本)
const path = require("path"); // 用于处理文件路径

// 定义文件路径常量
const PACKAGE_JSON_PATH = path.join(__dirname, "package.json"); // package.json 文件路径
const README_PATH = path.join(__dirname, "README.md"); // README.md 文件路径
const README_ZH_CN_PATH = path.join(__dirname, "README.zh-CN.md"); // README.zh-CN.md 文件路径

// 定义 Markdown 表格在 README.md 中的标记
const TABLE_START_MARKER = "<!-- EXTENSIONS_TABLE_START -->"; // 表格开始标记
const TABLE_END_MARKER = "<!-- EXTENSIONS_TABLE_END -->"; // 表格结束标记

/**
 * 格式化扩展 ID 为更友好的显示名称
 * @param {string} extensionId - 扩展的 ID (例如 "bierner.markdown-checkbox")
 * @returns {string} 格式化后的扩展名称 (例如 "Markdown Checkbox")
 */
function formatExtensionName(extensionId) {
    // 通常扩展 ID 的格式是 "publisher.name"
    // 我们取 "." 之后的部分作为基础名称
    const namePart = extensionId.includes(".") ? extensionId.split(".")[1] : extensionId;

    // 将短横线分隔的单词转换为首字母大写并用空格连接
    return namePart
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

/**
 * 生成 Markdown 徽章链接
 * @param {string} imgUrl - 徽章图片链接的 URL
 * @param {string} hrefUrl - 点击徽章时跳转的链接
 * @param {string} label - 徽章的标签
 * @returns {string} Markdown 格式的徽章链接
 */
function mdBadge(label, imgUrl, hrefUrl) {
    if (!hrefUrl) {
        return `![${label}](${imgUrl})`;
    }
    return `[![${label}](${imgUrl})](${hrefUrl})`;
}

/**
 * 根据 extensionPack 数组生成 Markdown 表格字符串
 * @param {string[]} extensionPack - 从 package.json 中获取的扩展 ID 数组
 * @returns {Promise<string>} 生成的 Markdown 表格字符串
 */
async function generateMarkdownTable(extensionPack) {
    // 如果 extensionPack 不存在或为空，则返回提示信息
    if (!extensionPack || extensionPack.length === 0) {
        return "| ⚠️ package.json 中没有列出扩展。 |\n";
    }

    // 为列定义目标文本宽度和分隔符长度以改善格式
    const nameColTextWidth = 30; // “Extension Name”列的目标文本宽度
    const badgesHeader = "Badges";
    // 徽章列的实际宽度将由徽章本身决定。分隔符应足够长。
    const badgesColSeparatorMinLength = 75; // “Badges”列分隔符的最小长度

    // 表头
    // 使用 padEnd 来格式化表头文本，使其在原始 Markdown 中对齐
    let tableMarkdown = `| ${"Extension Name".padEnd(nameColTextWidth)} | ${badgesHeader} |\n`;

    // 分隔线
    // 根据定义的宽度创建分隔线
    const nameSeparator = "-".repeat(nameColTextWidth);
    const badgesSeparator = "-".repeat(Math.max(badgesHeader.length, badgesColSeparatorMinLength));
    tableMarkdown += `| ${nameSeparator} | ${badgesSeparator} |\n`;

    // 表格行
    for (const extensionId of extensionPack) {
        const displayName = formatExtensionName(extensionId); // 获取格式化后的显示名称
        const marketplaceLink = `https://marketplace.visualstudio.com/items?itemName=${extensionId}`; // 市场链接
        const unclickableLink = ``; // 不让点击

        // 构建徽章的 Markdown 代码
        const downloadsBadge = mdBadge(
            "Visual Studio Marketplace Downloads",
            `https://img.shields.io/visual-studio-marketplace/d/${extensionId}`,
            marketplaceLink,
        );
        const ratingBadge = mdBadge(
            "Visual Studio Marketplace Rating",
            `https://img.shields.io/visual-studio-marketplace/r/${extensionId}`,
            unclickableLink,
        );

        const badges = `${downloadsBadge} ${ratingBadge}`; // 组合所有徽章

        // 使用 padEnd 格式化第一列的显示名称
        // 徽章列将根据其内容自动调整宽度
        tableMarkdown += `| ${displayName.padEnd(nameColTextWidth)} | ${badges} |\n`;
    }

    return tableMarkdown;
}

/**
 * 主函数，用于读取 package.json，生成表格，并更新 README.md
 * @param {string} readmePath - 指定 markdown 文件的路径
 */
async function updateReadmeWithExtensions(readmePath) {
    try {
        // 1. 读取 package.json 文件内容
        let packageJsonContent;
        try {
            packageJsonContent = await fs.readFile(PACKAGE_JSON_PATH, "utf8");
        } catch (error) {
            console.error(`❌ 错误：无法读取 package.json 文件 ${PACKAGE_JSON_PATH}`);
            console.error(error);
            return;
        }

        // 2. 解析 JSON 内容
        let packageData;
        try {
            packageData = JSON.parse(packageJsonContent);
        } catch (error) {
            console.error(`❌ 错误：解析 package.json 文件失败。请检查文件格式是否正确。`);
            console.error(error);
            return;
        }

        const extensionPack = packageData.extensionPack;

        if (!extensionPack) {
            console.warn("⚠️ 警告：在 package.json 中未找到 'extensionPack' 字段。README.md 将不会被更新。");
            return;
        }

        if (!Array.isArray(extensionPack)) {
            console.error("❌ 错误：package.json 中的 'extensionPack' 字段不是一个数组。README.md 将不会被更新。");
            return;
        }

        // 3. 生成新的 Markdown 表格
        console.log("🔄 正在根据 package.json 生成扩展表格...");
        const newTableContent = await generateMarkdownTable(extensionPack);
        console.log("✅ 表格内容已生成。");

        // 4. 读取 README.md 文件内容
        let readmeContent;
        try {
            readmeContent = await fs.readFile(readmePath, "utf8");
        } catch (error) {
            console.error(`❌ 错误：无法读取 README.md 文件 ${readmePath}`);
            console.error(error);
            return;
        }

        // 5. 查找表格标记在 README.md 中的位置
        const startIndex = readmeContent.indexOf(TABLE_START_MARKER);
        const endIndex = readmeContent.indexOf(TABLE_END_MARKER);

        if (startIndex === -1 || endIndex === -1) {
            console.error(`❌ 错误：在 README.md 中未找到 '${TABLE_START_MARKER}' 或 '${TABLE_END_MARKER}' 标记。`);
            console.error("请确保这两个标记都存在于 README.md 文件中，以便脚本可以定位并替换表格。");
            return;
        }
        if (startIndex >= endIndex) {
            console.error(`❌ 错误：'${TABLE_START_MARKER}' 标记必须出现在 '${TABLE_END_MARKER}' 标记之前。`);
            return;
        }

        // 6. 构建新的 README 内容
        const contentBeforeTable = readmeContent.substring(0, startIndex + TABLE_START_MARKER.length);
        const contentAfterTable = readmeContent.substring(endIndex);

        // 组合新的 README 内容：
        // 开始标记前的内容 + 换行符 + 新表格内容（已包含换行符） + 结束标记本身 + 结束标记后的内容
        // 注意：newTableContent 通常以 \n 结尾，所以 TABLE_END_MARKER 前不需要额外的 \n，除非你想多空一行。
        // 为了紧凑，我们直接拼接。
        const updatedReadmeContent = `${contentBeforeTable}\n${newTableContent.trimEnd()}\n${contentAfterTable}`;

        // 7. 将更新后的内容写回 README.md 文件
        try {
            await fs.writeFile(readmePath, updatedReadmeContent, "utf8");
            console.log("✅ README.md 文件已成功更新！");
        } catch (error) {
            console.error(`❌ 错误：写入更新到 README.md 文件失败。`);
            console.error(error);
        }
    } catch (error) {
        console.error("❌ 执行脚本时发生意外错误：", error);
    }
}

// 执行主函数
updateReadmeWithExtensions(README_PATH);
updateReadmeWithExtensions(README_ZH_CN_PATH);
