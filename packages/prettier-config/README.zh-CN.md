# @enihsyou/prettier-config

<p align="center">
  <a href="README.md">English</a> •
  <a href="README.zh-CN.md">简体中文 (Simplified Chinese)</a>
</p>

这是一个可共享的 Prettier 配置，用于统一项目中的编码风格。

## 安装

请在项目的终端中运行以下命令安装发布版本。

```shell
npm install --save-dev @enihsyou/prettier-config
```

或者运行以下命令引用 GitHub 上的最新版本。

```shell
pnpm add --save-dev github:enihsyou/shared-config#path:/packages/prettier-config
```

## 使用方法

安装后，在 `package.json` 文件中添加一个键以应用本设定。

```json
{
    "prettier": "@enihsyou/prettier-config"
}
```

如果想基于本配置进行修改，可以在 `prettier.config.mjs` 中根据需要扩展

```javascript
import enihsyou from "@enihsyou/prettier-config";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    ...enihsyou,
    // ... your own config
};

export default config;
```

有关如何配置 Prettier 的更多信息，请参阅 [Prettier - Using a Shareable Config](https://prettier.io/docs/sharing-configurations#using-a-shareable-config)。

## 常见问题

### 在 esbenp.prettier-vscode 插件报错提示不支持 ESM

在 `package.json` 中配置后 VSCode 插件提示报错这种内容

```log
Error [ERR_REQUIRE_ESM]: require() of ES Module ...\prettier-config.mjs not supported.
Instead change the require of ...\prettier-config.mjs to a dynamic import() which is available in all CommonJS modules.
```

根据 [prettier-vscode#3298](https://github.com/prettier/prettier-vscode/issues/3298#issuecomment-1927472222) 的建议，在项目中安装 `prettier` 作为依赖项可以解决。
或者在 VSCode 中设置 `prettier.prettierPath` 为全局安装好的 prettier。
