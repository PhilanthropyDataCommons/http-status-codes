import { defineConfig } from "eslint/config";
import biffud from "@biffud/eslint-config";
import prettier from "eslint-config-prettier";

const getBiffudNamingRule = () =>
	biffud.findLast(
		(config) =>
			config.rules?.["@typescript-eslint/naming-convention"] !== undefined,
	).rules["@typescript-eslint/naming-convention"];

const [biffudNamingSeverity, ...biffudNamingOptions] = getBiffudNamingRule();

export default defineConfig([
	...biffud,
	prettier,
	{
		rules: {
			"@typescript-eslint/naming-convention": [
				biffudNamingSeverity,
				{ selector: ["enum", "enumMember"], format: ["UPPER_CASE"] },
				...biffudNamingOptions,
			],
		},
	},
]);
