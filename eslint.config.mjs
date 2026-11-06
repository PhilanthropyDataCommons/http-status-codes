import { defineConfig } from "eslint/config";
import biffud from "@biffud/eslint-config";
import prettier from "eslint-config-prettier";

export default defineConfig([
	...biffud,
	prettier,
	{
		rules: {
			"@typescript-eslint/naming-convention": "off",
		},
	},
]);
