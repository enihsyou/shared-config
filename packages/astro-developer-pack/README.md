# Astro Developer Pack

<p align="center">
  <a href="README.md">English</a> •
  <a href="README.zh-CN.md">简体中文 (Simplified Chinese)</a>
</p>

This is a set of VSCode extensions that I recommend installing for Astro project development.

## How to Use

This extension pack has a strong personal touch, so it uses a private publishing mode and will not be published to the VSCode Marketplace.

Use vsce to package it into a vsix file and install it manually.

```shell
npm install -g @vscode/vsce
# npm run package
vsce package --allow-missing-repository --skip-license
code --install-extension astro-developer-pack-0.0.1.vsix
```

## Extension List

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
