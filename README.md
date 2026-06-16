# CI Repair Agent Demo

Small GitHub Actions demo repository for testing a CI failure repair agent.

The `main` branch is expected to pass CI. Branches prefixed with `fail/` intentionally break one behavior so a repair agent can read the failed workflow, generate a patch, and verify the fix locally.

## Commands

```bash
npm test
npm run lint
```

## Demo Failure Branches

- `fail/login-button-disabled`: assertion failure in `src/login-button.js`
- `fail/counter-increment`: assertion failure in `src/counter.js`
- `fail/todo-filter`: assertion failure in `src/todos.js`
- `fail/lint-unused-var`: lint failure in `src/greeting.js`
