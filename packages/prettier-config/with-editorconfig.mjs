// Prettier Configuration File

// 如果本文件被复制到项目根目录直接使用，由于 prettier-vscode 的
// 缓存机制，对文件的修改只会在重启 vscode extension host 后生效
// https://github.com/prettier/prettier-vscode/issues/3644

import config from "./prettier-config.mjs";

// 移除在 EditorConfig 中包含的配置
const prettierConfig = { ...config };
delete prettierConfig.tabWidth;
delete prettierConfig.useTabs;

// 导出适用于与 EditorConfig 配合使用的 Prettier 配置
// 因为它更能适配多种文件后缀格式
export default prettierConfig;
