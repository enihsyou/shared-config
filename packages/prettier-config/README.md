# @enihsyou/prettier-config

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

安装后，在您的 **package.json** 文件中添加一个键以应用本设定。

```json
"prettier": "@enihsyou/prettier-config"
```

有关如何配置 Prettier 的更多信息，请参阅 [Prettier - Using a Shareable Config](https://prettier.io/docs/sharing-configurations#using-a-shareable-config)。
