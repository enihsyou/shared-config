import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 获取包的根目录（当前目录）
const packageRoot = __dirname;
// 获取项目根目录（通常是 node_modules 的上层目录）
const projectRoot = path.resolve(process.env.INIT_CWD || process.cwd());

const sourceFile = path.join(packageRoot, 'editorconfig');
const targetFile = path.join(projectRoot, '.editorconfig');

try {
  if (fs.existsSync(targetFile)) {
    // 检查目标文件是否已经存在
    console.log('\x1b[33m%s\x1b[0m', '⚠️ 已经存在 .editorconfig 文件，没有覆盖现有文件。');
    console.log('  如果您想使用此包提供的配置，请手动复制或合并文件。');
    console.log(`  现有文件位于 ${targetFile}`);
  } else {
    // 如果文件不存在，则复制
    fs.copyFileSync(sourceFile, targetFile);
    console.log('\x1b[32m%s\x1b[0m', '✅ 已创建 .editorconfig 文件。');
    console.log(`  新建文件位于 ${targetFile}`);
  }
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', '❌ 复制 .editorconfig 文件时出错:');
  console.error(error);
}
