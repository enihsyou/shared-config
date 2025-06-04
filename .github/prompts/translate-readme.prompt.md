---
mode: 'edit'
description: 'Translate README files from Chinese to English. Run with "Chat: Run Prompt" VSCode command.'
---

Your goal is to write README files for project directories in English.

- Users will edit ${fileDirname}/README.zh-CN.md in Chinese as the source. If the file is unchanged in the Git workspace, no action is needed.
- If the meaning in source file has changed, or new content has been added, translate the modified parts to English and update the ${fileDirname}/README.md file in the same directory.
- Minimize Git diff complexity, Only make meaningful changes. Make sure the file content in translated version is complete and reflect the meaning in source file.
- If English words appear in the source, they should be kept as-is in the English version.
- Keep and update the language section in the top of README.md file.
