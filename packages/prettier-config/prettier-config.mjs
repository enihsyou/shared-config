// Prettier Configuration File

// 如果本文件被复制到项目根目录直接使用，由于 prettier-vscode 的
// 缓存机制，对文件的修改只会在重启 vscode extension host 后生效
// https://github.com/prettier/prettier-vscode/issues/3644

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  // 在 4 空格缩进上宽度要适当增加
  printWidth: 120,
  // 操作符换行后放在前面更美观
  experimentalOperatorPosition: "start",
  // 文件特殊规则
  overrides: [
    {
      // requirePragma 用来禁用格式化
      // https://github.com/prettier/prettier/issues/4547#issuecomment-1606712871
      files: ["pnpm-lock.yaml"],
      options: { requirePragma: true },
    },
  ],
};

// noinspection JSUnusedGlobalSymbols
export default config;
