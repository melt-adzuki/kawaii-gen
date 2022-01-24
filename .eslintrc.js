module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"react-app",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"react",
		"@typescript-eslint",
	],
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	rules: {
		indent: [
			"error",
			"tab",
			{
				ignoreComments: true,
			},
		],
		"no-tabs": [
			"error",
			{
				allowIndentationTabs: true,
			},
		],
		quotes: [
			"error",
			"double",
		],
		semi: [
			"error",
			"never",
		],
		"brace-style": [
			"error",
			"allman",
		],
		"arrow-parens": [
			"error",
			"as-needed",
		],
		"react/jsx-indent": [
			"error",
			"tab",
		],
		"react/jsx-indent-props": [
			"error",
			"tab",
		],
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"max-len": 0,
		"no-alert": 0,
		"no-param-reassign": 0,
		"import/extensions": 0,
		"react/react-in-jsx-scope": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-props-no-spreading": 0,
	},
}
