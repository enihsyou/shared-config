# Astro Developer Pack

This is a set of VSCode extensions that I (enihsyou) recommend installing for Astro project development.

## Extension List

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

> Only includes additionally required extensions; essential extensions are not listed here.

## FAQ

**Q**: When do I need this extension pack?

**A**: There are multiple ways to control which extensions are enabled in a workspace in VSCode.

1. [Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync) is suitable for user-level global extension enable/disable control and cannot be precise to a single workspace.
2. [Manage Extension](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace#_disable-an-extension) can enable/disable extensions for the current project, but it needs to be repeated for each project of the same type.
3. [Workspace Extension Recommendations](https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions) are suitable for sharing single/same-type projects among teams, but they only suggest extensions and do not force installation and enablement.
4. [Extension Packs](https://code.visualstudio.com/api/references/extension-manifest#extension-packs) are suitable for distributing a set of extension recommendations for specific usage scenarios. Combined with the previous methods, they can achieve rapid control of extension sets for similar projects.
5. [Profiles](https://code.visualstudio.com/docs/configure/profiles) recommend a set of configuration files for each project type, managed completely independently, and are the most powerful way. However, it is difficult to synchronize profile forks with each other (e.g., wanting to apply an extension to all profiles *except* a specific one).

I want to provide a recommended set of extensions for *project development*. When a user opens an Astro project in VSCode, for example, these extensions should be automatically enabled.
Therefore, this extension pack was created. Disabling the extension pack for a workspace will synchronously disable all extensions listed in the pack, achieving batch management.

**Q**: Why not enable all extensions directly, but selectively enable them?

**A**: Simply put, for performance and experience. Although VSCode extensions now have rich lazy-loading activation conditions, there are still plugins that will automatically activate unconditionally when enabled. Also, some plugins are only needed at specific times. For example, not all projects will repeatedly use the `Docker` extension, but it automatically activates when it detects a Dockerfile in the workspace, then creates a toolbar, tries to connect to the Docker Host, and even pops up a notification if the connection fails. I don't want this kind of interruption.

**Q**: How to uninstall this extension pack without uninstalling all the extensions it references?

**A**: If you uninstall the extension pack directly in VSCode, it will also uninstall all the extensions it references. This is generally not the desired behavior, so this extension pack only includes additionally required extensions and excludes commonly used ones.
Currently, VSCode [does not and will not provide](https://github.com/microsoft/vscode/issues/169109) a feature to uninstall an extension pack without uninstalling its bundled extensions, but there is a manual workaround.

1. Delete the `$HOME/.vscode/extensions/enihsyou.astro-developer-pack-<version>` folder
2. Remove the entry for the extension pack from `$HOME/.vscode/extensions/extensions.json`

## Other Information

- Icon drawn using the [Method Draw](https://github.com/methodofaction/Method-Draw) tool.

- This extension pack is highly opinionated and is best used in a private publishing mode.
However, until VSCode supports [private extension repositories](https://github.com/microsoft/vscode/issues/21839), it will be published with public visibility to the VSCode Marketplace for easy synchronization across multiple devices and automatic updates.
