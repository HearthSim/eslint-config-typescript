module.exports = {
	plugins: [
		"@typescript-eslint",
		"unused-imports",
		"jest",
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jest/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		// prettier always need to be last
		"prettier",
		"prettier/@typescript-eslint"
	],
	settings: {
		react: {
			version: "detect"
		}
	},
	overrides: [
		{
			files: ["**/*.js", "**/*.jsx"],
			rules: {
				// require is allowed in js, as we may not have import available
				"@typescript-eslint/no-var-requires": "off",
			}
		}
	],
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-empty-interface": "warn",
		"@typescript-eslint/ban-types": [
			"warn", {
				types: {
					"{}": {
						"message": "If you're trying to do something like React.FC<{}>, use React.FC instead",
					},
				},
				extendDefaults: true,
			},
		],
		// non-null assertions aren't great, but sometimes a last resort
		"@typescript-eslint/no-non-null-assertion": "off",
		// redundant types are totally okay, they can signal developer intent
		"@typescript-eslint/no-inferrable-types": "off",
		// these can be acceptable
		"@typescript-eslint/no-empty-function": "off",
		// we're not so strict on external module exports and trust typescript's interference here
		"@typescript-eslint/explicit-module-boundary-types": "off",
		// replaced by no-unused-imports, which can also handle typescript
		"@typescript-eslint/no-unused-vars": "off",
		// while these aren't great, if someone explicitly uses them let's allow them
		"@typescript-eslint/ban-ts-comment": "off",
		// no case declarations are not necessarily a bug, however they can lead to misused variables
		"no-case-declarations": "warn",
		"no-empty-pattern": "warn",
		// we're pretty lenient on these, and they can help tighten types
		"no-extra-boolean-cast": "off",
		// these are usually not great, but let's not fully forbid them
		"no-constant-condition": "warn",
		// consts are generally preferred in this case
		"prefer-const": "warn",
		// mostly used for auto-fixing
		"unused-imports/no-unused-imports": "warn",
		"unused-imports/no-unused-vars": ["warn", {
			varsIgnorePattern: "^_",
			argsIgnorePattern: "^_",
			caughtErrorsIgnorePattern: "^_",
		}],
		// we don't use this
		"react/display-name": "off",
		// not great, but otherwise we get false positives with <Trans> (localization)
		"react/jsx-key": "warn",
		// The following rule is very sensible, enforcing noopener is critical. However, we're usually okay with
		// exposing the referrer. Unfortunately it can't handle styled-components anchors, and cannot always detect
		// internal links.
		"react/jsx-no-target-blank": ["warn", {
			"allowReferrer": true
		}],
		// our build chain can handle literals
		"react/no-unescaped-entities": "off",
		// doesn't work reliably with typescript (`FC<Props>` vs. `{} :Props`)
		"react/prop-types": "off",
		// we shouldn't usually have to worry about this
		"react/react-in-jsx-scope": "off",
		// acceptable as long as it's only imported from other tests
		"jest/no-export": "warn",
		// the following warning catches errors like
		//   `expect(button.props().href === "/test");`
		// and is thus an error
		"jest/valid-expect": "error",
		// a bad title with e.g. a space at the end is okay, but rather warn
		"jest/valid-title": "warn",
	}
};

