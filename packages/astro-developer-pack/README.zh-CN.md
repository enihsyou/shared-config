# Astro Developer Pack

<p align="center">
  <a href="README.md">English</a> •
  <a href="README.zh-CN.md">简体中文 (Simplified Chinese)</a>
</p>

这是一组我进行 Astro 项目开发推荐安装的 VSCode 扩展。

## 如何使用

这个扩展包带有强烈的个人习惯色彩，所以使用私有发布模式，不会发布到 VSCode Marketplace。

采用 vsce 打包成 vsix 文件，手动安装。

```shell
npm install -g @vscode/vsce
# npm run package
vsce package --allow-missing-repository --skip-license
code --install-extension astro-developer-pack-0.0.1.vsix
```

## 扩展清单

<!-- EXTENSIONS_TABLE_START -->
| Extension Name                 | Badges |
| ------------------------------ | --------------------------------------------------------------------------- |
| Astro Vscode                   | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/astro-build.astro-vscode)](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/astro-build.astro-vscode) |
| Vscode Markdownlint            | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/davidanson.vscode-markdownlint)](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/davidanson.vscode-markdownlint) |
| Vscode Eslint                  | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/dbaeumer.vscode-eslint)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/dbaeumer.vscode-eslint) |
| Editorconfig                   | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/editorconfig.editorconfig)](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/editorconfig.editorconfig) |
| Prettier Vscode                | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/esbenp.prettier-vscode) |
| Ts Error Translator            | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/mattpocock.ts-error-translator)](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/mattpocock.ts-error-translator) |
| Dotenv                         | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/mikestead.dotenv)](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/mikestead.dotenv) |
| Bun Vscode                     | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/oven.bun-vscode)](https://marketplace.visualstudio.com/items?itemName=oven.bun-vscode) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/oven.bun-vscode) |
| Vscode Mdx                     | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/unifiedjs.vscode-mdx)](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/unifiedjs.vscode-mdx) |
| Pretty Ts Errors               | [![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/yoavbls.pretty-ts-errors)](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/yoavbls.pretty-ts-errors) |
<!-- EXTENSIONS_TABLE_END -->

> 只包含了额外需要的扩展，而那些必备的扩展不在此列

## 常见问题

**Q**: 什么情况下我需要这个扩展包？

**A**: 在 VSCode 中控制工作区启用哪些扩展有多种方式。

1. [Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync) 适合用户级别的全局扩展启停控制，无法精确到单个工作区。
2. [Manage Extension](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace#_disable-an-extension) 可以为当前项目启用/禁用扩展，但需要为每个同类型项目重复操作。
3. [Workspace Extension Recommendations](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) 适合在团队间共享单个/同类型项目，但它仅对扩展进行建议而不会强制安装并启用。
4. [Extension Packs](https://code.visualstudio.com/api/references/extension-manifest#extension-packs) 适合针对使用场景分发一组扩展建议，结合前面几种方式可以实现快速为同类型项目控制扩展集。
5. [Profiles](https://code.visualstudio.com/docs/configure/profiles) 为每类型项目建议一组配置文件，完全独立管理，是最强大的方式。但是配置文件分叉之后难以互相同步（比如想要将扩展应用于*除*某之外的所有配置文件）。

我想要提供一份 *项目开发* 的建议扩展，当用户在 VSCode 中打开比如说 Astro 项目时，能够自动启用这些扩展。
所以创建了此扩展包，当为工作区禁用扩展包会同步禁用包列出的所有扩展，实现批量管理。

**Q**: 为什么不直接启用所有扩展，而是选择性地启用？

**A**: 简单来说，为了性能和体验。虽然现在 VSCode 扩展的懒加载激活条件已经很丰富了，但任然有插件会在启用时无条件自动激活。以及有些插件只在特定时候需要，举个例子，并不是所有项目都会反复用到 `Docker` 扩展，但它检测到工作区中有 Dockerfile 时会自动启用，然后创建一个工具栏，同时尝试链接 Docker Host，并且连接失败时还会弹个提示，我不想要这种被打扰的体验。
