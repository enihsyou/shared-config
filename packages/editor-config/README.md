# @enihsyou/editor-config

这是一个可共享的 EditorConfig 配置，用于统一项目中的编码风格。

## 安装

请在项目的终端中运行以下命令安装发布版本。

```shell
npm install --save-dev @enihsyou/editor-config
```

或者运行以下命令引用 GitHub 上的最新版本。

```shell
pnpm add --save-dev github:enihsyou/shared-config#path:/packages/editor-config
```

或者直接从 GitHub 上以文件形式下载最新版本。

```shell
curl -L https://raw.githubusercontent.com/enihsyou/shared-config/main/packages/editor-config/.editorconfig -o .editorconfig
```

## 补充说明

一般而言包管理工具会自动运行 `postinstall` 命令将 `.editorconfig` 文件复制到项目根目录中，
如果它因为[安全原因]没有执行，你需要手动复制文件，或者执行 `install.mjs` 让脚本帮你复制。

- 从包中复制 `.editorconfig` 文件到你的当前目录：

```shell
cp node_modules/@enihsyou/editor-config/.editorconfig .
```

- 执行 `install.mjs` 脚本，复制到你的当前目录：

```shell
node node_modules/@enihsyou/editor-config/install.mjs
```

有关如何配置 EditorConfig 的更多信息，请访问 [https://editorconfig.org](https://editorconfig.org)。

[安全原因]: https://pnpm.io/cli/add#--allow-build
