# @enihsyou/prettier-config

<p style="text-align: center;">
  <a href="README.md">English</a> •
  <a href="README.zh-CN.md">简体中文 (Simplified Chinese)</a>
</p>

This is a shareable Prettier configuration for unifying code style in your project.

## Installation

Please run the following command in your project terminal to install the published version:

```shell
npm install --save-dev @enihsyou/prettier-config
```

Or run the following command to reference the latest version from GitHub:

```shell
pnpm add --save-dev github:enihsyou/shared-config#path:/packages/prettier-config
```

## Usage

After installation, add a key in your `package.json` file to apply this configuration:

```json
{
    "prettier": "@enihsyou/prettier-config"
}
```

If you want to extend this configuration, you can do so in `prettier.config.mjs` as needed:

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

For more information on configuring Prettier, please refer to [Prettier - Using a Shareable Config](https://prettier.io/docs/sharing-configurations#using-a-shareable-config).

## FAQ

### Error in esbenp.prettier-vscode extension: ESM not supported

After configuring in `package.json`, the VSCode extension may report an error like:

```log
Error [ERR_REQUIRE_ESM]: require() of ES Module ...\prettier-config.mjs not supported.
Instead change the require of ...\prettier-config.mjs to a dynamic import() which is available in all CommonJS modules.
```

According to the suggestion in [prettier-vscode#3298](https://github.com/prettier/prettier-vscode/issues/3298#issuecomment-1927472222), installing `prettier` as a dependency in your project can solve this. Alternatively, set `prettier.prettierPath` in VSCode to the globally installed prettier.
