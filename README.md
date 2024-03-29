# @hearthsim/eslint-config-typescript

This repository contains the HearthSim common ESLint configuration with Typescript support.

For included React support use [@HearthSim/eslint-config-typescript-react](https://github.com/HearthSim/eslint-config-typescript-react) instead.

## Upgrading from v1

In versions v2.0.0 and later the React and React Hooks rules have moved to a separate package [@HearthSim/eslint-config-typescript-react](https://github.com/HearthSim/eslint-config-typescript-react).
It can be used as a drop-in replacement for v1 of @hearthsim/eslint-config-typescript (without -react).

To switch to the new package:

1. Remove this package:
```bash
$ yarn remove @hearthsim/eslint-config-typescript
```

2. Install the new React package:
```bash
$ yarn add -D @hearthsim/eslint-config-typescript-react
```

3. Update your`.eslintrc.js`:
```js
module.exports = {
	//...
	extends: ["@hearthsim/eslint-config-typescript-react"],
	//...
};
```

## Setup

1. Install

```bash
$ yarn add -D eslint @hearthsim/eslint-config-typescript
```

2. Install ESLint plugins  
Plugins are resolved relative to the final project and must thus installed explicitly as part of the project:

```bash
$ yarn add -D \
              @typescript-eslint/eslint-plugin@^5.4.0 \
              eslint-plugin-import@2.25.3 \
              eslint-plugin-jest@25.2.4
```

3. Configure ESLint:

Create or update your`.eslintrc.js`:
```js
module.exports = {
	root: true,
	extends: ["@hearthsim/eslint-config-typescript"],
	env: {
		browser: true,
	},
};
```

4. Add the scripts to your `package.json`:

```json
{
	"scripts": {
		"lint:eslint": "eslint --cache ./"
	}
}

```

## Philosophy

### Zero tolerance for Errors false positives
   If a rule is not able to handle the ways we legitimately use it, it needs to be downgraded to a warning. 
   Errors are reserved for critical  issues that can directly introduce security risks, break the application or lead to severe performance penalties. 
