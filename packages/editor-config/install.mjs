import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 获取包的根目录（当前目录）
const packageRoot = __dirname;
// 获取项目根目录（通常是 node_modules 的上层目录）
const projectRoot = path.resolve(process.env.INIT_CWD || process.cwd());

const sourceFile = path.join(packageRoot, ".editorconfig");
const targetFile = path.join(projectRoot, ".editorconfig");

try {
    const fstat = fs.lstatSync(targetFile, { throwIfNoEntry: false });
    if (fstat) {
        console.warn("\x1b[33m%s\x1b[0m", `⚠️ 已经存在 .editorconfig 文件，没有覆盖现有文件。`);
    } else {
        fs.copyFileSync(sourceFile, targetFile);
        console.info("\x1b[32m%s\x1b[0m", "✅ 已创建 .editorconfig 文件。");
    }
    console.log(`  模板文件位于 ${sourceFile}`);
    console.log(`  新建文件位于 ${targetFile}`);
} catch (error) {
    console.error("\x1b[31m%s\x1b[0m", "❌ 复制 .editorconfig 文件时出错:");
    console.error(error);
}
