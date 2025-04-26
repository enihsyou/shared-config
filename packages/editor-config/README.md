# @enihsyou/editor-config

<p style="text-align: center;">
  <a href="README.md">English</a> •
  <a href="README.zh-CN.md">简体中文 (Simplified Chinese)</a>
</p>

This is a shareable EditorConfig configuration for unifying code style in your project.

## Installation

Please run the following command in your project terminal to install the published version:

```shell
npm install --save-dev @enihsyou/editor-config
```

Or run the following command to reference the latest version from GitHub:

```shell
pnpm add --save-dev github:enihsyou/shared-config#path:/packages/editor-config
```

Or directly download the latest version as a file from GitHub:

```shell
curl -L https://raw.githubusercontent.com/enihsyou/shared-config/main/packages/editor-config/.editorconfig -o .editorconfig
```

## Additional Notes

Generally, package managers will automatically run the `postinstall` command to copy the `.editorconfig` file to your project root directory. If it does not execute due to [security reasons], you need to manually copy the file or run `install.mjs` to let the script help you copy it.

- Copy `.editorconfig` from the package to your current directory:

```shell
cp node_modules/@enihsyou/editor-config/.editorconfig .
```

- Run the `install.mjs` script to copy to your current directory:

```shell
node node_modules/@enihsyou/editor-config/install.mjs
```

For more information on how to configure EditorConfig, please visit [https://editorconfig.org](https://editorconfig.org).

[security reasons]: https://pnpm.io/cli/add#--allow-build
