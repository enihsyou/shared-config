# Astro Developer Pack

这是一组我(enihsyou)进行 Astro 项目开发推荐安装的 VSCode 扩展。

## 扩展清单

<!-- EXTENSIONS_TABLE_START -->

| Extension ID                                                                                                            | Choose Reason                                                                               | Badges                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| astro-build.astro-vscode [🔗](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)             | Provides syntax highlighting and IntelliSense for Astro files.                              | ![downloads](https://img.shields.io/vscode-marketplace/d/astro-build.astro-vscode.svg) ![rating](https://img.shields.io/vscode-marketplace/r/astro-build.astro-vscode.svg)             |
| davidanson.vscode-markdownlint [🔗](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint) | Helps maintain consistent Markdown style with linting.                                      | ![downloads](https://img.shields.io/vscode-marketplace/d/davidanson.vscode-markdownlint.svg) ![rating](https://img.shields.io/vscode-marketplace/r/davidanson.vscode-markdownlint.svg) |
| dbaeumer.vscode-eslint [🔗](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                 | Integrates ESLint for JavaScript and TypeScript linting.                                    | ![downloads](https://img.shields.io/vscode-marketplace/d/dbaeumer.vscode-eslint.svg) ![rating](https://img.shields.io/vscode-marketplace/r/dbaeumer.vscode-eslint.svg)                 |
| editorconfig.editorconfig [🔗](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)           | Supports EditorConfig files to maintain consistent coding styles. Works well with Prettier. | ![downloads](https://img.shields.io/vscode-marketplace/d/editorconfig.editorconfig.svg) ![rating](https://img.shields.io/vscode-marketplace/r/editorconfig.editorconfig.svg)           |
| esbenp.prettier-vscode [🔗](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                 | Formats code using Prettier, ensuring a consistent code style.                              | ![downloads](https://img.shields.io/vscode-marketplace/d/esbenp.prettier-vscode.svg) ![rating](https://img.shields.io/vscode-marketplace/r/esbenp.prettier-vscode.svg)                 |
| jock.svg [🔗](https://marketplace.visualstudio.com/items?itemName=jock.svg)                                             | Support editing and previewing SVG files directly in VS Code.                               | ![downloads](https://img.shields.io/vscode-marketplace/d/jock.svg.svg) ![rating](https://img.shields.io/vscode-marketplace/r/jock.svg.svg)                                             |
| mattpocock.ts-error-translator [🔗](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator) | Learn TypeScript on the way with writing code.                                              | ![downloads](https://img.shields.io/vscode-marketplace/d/mattpocock.ts-error-translator.svg) ![rating](https://img.shields.io/vscode-marketplace/r/mattpocock.ts-error-translator.svg) |
| mikestead.dotenv [🔗](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)                             | Provides syntax highlighting for .env files.                                                | ![downloads](https://img.shields.io/vscode-marketplace/d/mikestead.dotenv.svg) ![rating](https://img.shields.io/vscode-marketplace/r/mikestead.dotenv.svg)                             |
| oven.bun-vscode [🔗](https://marketplace.visualstudio.com/items?itemName=oven.bun-vscode)                               | Use Bun as the JavaScript runtime for Astro.                                                | ![downloads](https://img.shields.io/vscode-marketplace/d/oven.bun-vscode.svg) ![rating](https://img.shields.io/vscode-marketplace/r/oven.bun-vscode.svg)                               |
| unifiedjs.vscode-mdx [🔗](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)                     | Adds support for MDX files, allowing JSX in Markdown.                                       | ![downloads](https://img.shields.io/vscode-marketplace/d/unifiedjs.vscode-mdx.svg) ![rating](https://img.shields.io/vscode-marketplace/r/unifiedjs.vscode-mdx.svg)                     |
| ms-vscode.wordcount [🔗](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wordcount)                       | Counts words in Markdown files, useful for content management.                              | ![downloads](https://img.shields.io/vscode-marketplace/d/ms-vscode.wordcount.svg) ![rating](https://img.shields.io/vscode-marketplace/r/ms-vscode.wordcount.svg)                       |
| yoavbls.pretty-ts-errors [🔗](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)             | Enhances TypeScript error messages with better formatting and readability.                  | ![downloads](https://img.shields.io/vscode-marketplace/d/yoavbls.pretty-ts-errors.svg) ![rating](https://img.shields.io/vscode-marketplace/r/yoavbls.pretty-ts-errors.svg)             |

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

我想要提供一份 _项目开发_ 的建议扩展，当用户在 VSCode 中打开比如说 Astro 项目时，能够自动启用这些扩展。
所以创建了此扩展包，当为工作区禁用扩展包会同步禁用包列出的所有扩展，实现批量管理。

**Q**: 为什么不直接启用所有扩展，而是选择性地启用？

**A**: 简单来说，为了性能和体验。虽然现在 VSCode 扩展的懒加载激活条件已经很丰富了，但任然有插件会在启用时无条件自动激活。以及有些插件只在特定时候需要，举个例子，并不是所有项目都会反复用到 `Docker` 扩展，但它检测到工作区中有 Dockerfile 时会自动启用，然后创建一个工具栏，同时尝试链接 Docker Host，并且连接失败时还会弹个提示，我不想要这种被打扰的体验。

**Q**: 如何删除此扩展包，而不同时删除它引用的所有扩展？

**A**: 如果直接在 VSCode 中删除扩展包，会同时删除它引用的所有扩展。这一般是非期望的行为，所以本扩展包只包含了额外需要的扩展，而排除了那些常用的扩展。
目前 VSCode [还没有并且也不会提供](https://github.com/microsoft/vscode/issues/169109) 删除扩展包的功能，但有个手动操作的变通方式。

1. 删除 `$HOME/.vscode/extensions/enihsyou.astro-developer-pack-<version>` 文件夹
2. 从 `$HOME/.vscode/extensions/extensions.json` 中删除扩展包的条目

## 其他信息

- 图标使用 [Method Draw](https://github.com/methodofaction/Method-Draw) 工具绘制

- 这个扩展包带有强烈的个人习惯色彩，最好使用私有发布模式。
  但在 VSCode 支持 [私有扩展库](https://github.com/microsoft/vscode/issues/21839) 之前，将以公开可见度发布到 VSCode Marketplace，方便在多设备同步和自动更新。
