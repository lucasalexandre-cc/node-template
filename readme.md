# **Node application template**

Node application template with standard and required configurations and good practices.

## What we have here?

### Eslint and Prettier

Standard rules configured and working with typescript. If you want to change something, just update `.prettierrc.json` and `.eslintrc`.

### Jest

Standart jest configuration, with some npm helpers.

- `npm run test`: run all tests with default configurations.
- `npm run test:staged`: used to lint-staged to run just modified test files.
- `npm run test:staged`: run all teste generating coverage.

### Git hooks

Using Husky and ListStaged to run some rules before commit, add and push.

- before commit: before run any commit command, for example: `git commit -m "test"`, it will check if commit follow a [pre-defined pattern](https://github.com/legend80s/git-commit-msg-linter). It is configured on `.husky/commit-msg`.
- before add: before run add command, for example: `git add .`, it will check if what you are adding is following lint configured rules and check if modified tests is passing. It is configured on `.husky/pre-commit`.
- before push: before run push command, for example: `git push`, it will check if all tests is passing. It is configured on `.husky/pre-push`.

**Important**: run `npm run prepare` if you are clonning this repo for first time. This will configure husky to work correctly.

### Run and build

On `package.json`, we have configurations to run application in development, and build/run on production.

- `npm run dev`: run application in development (refresh after any changes).
- `npm run build`: build application, converting ts to js in ./dist path.
- `npm start`: run builded code (for production mode).
