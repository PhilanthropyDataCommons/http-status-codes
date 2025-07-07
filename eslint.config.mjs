import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import love from "eslint-config-love";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default defineConfig([
	js.configs.recommended,
	tseslint.configs.eslintRecommended,
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.strict,
	love,
	prettier,
]);
