import { defineConfig } from "eslint/config";
import biffud, { namingConventionOptionsWithout } from "@biffud/eslint-config";
import prettier from "eslint-config-prettier";

export default defineConfig([
	...biffud,
	prettier,
	{
		rules: {
			"@typescript-eslint/naming-convention": [
				"error",
				...namingConventionOptionsWithout(["enumMember"]),
				{ selector: ["enum", "enumMember"], format: ["UPPER_CASE"] },
			],
		},
	},
]);
