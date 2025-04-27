import { defineConfig } from "eslint/config";
import eslintConfig from "@enihsyou/eslint-config";

export default defineConfig([
    {
        files: ["**/*.mjs"],
        extends: [eslintConfig],
    },
]);
