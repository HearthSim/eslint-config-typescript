# @hearthsim/eslint-config-typescript

This repository contains the HearthSim common ESLint configuration.

## Setup

1. Install

```bash
$ yarn add -D eslint @hearthsim/eslint-config-typescript
```

2. Install ESLint plugins  
Plugins are resolved relative to the final project and must thus installed explicitly as part of the project:

```bash
$ yarn add -D eslint-plugin-react@^7.22.0 \
              eslint-plugin-react-hooks@^4.2.0 \
              eslint-plugin-import@^2.22.1 \
              eslint-plugin-jest@^24.1.3 \
              @typescript-eslint/eslint-plugin@^4.15.1
```

3. Configure ESLint:

Create or update your`.eslintrc.js`:
```js
module.exports = {
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
