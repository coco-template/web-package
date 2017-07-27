# typescript-lib-starter
Starter kit with zero-config for building a library in TypeScript, featuring RollupJS, Jest, Prettier, TSLint!

## Attention
Use ES6 javascript for test suits.

## Avoid
`babel-plugin-transform-runtime` weired issue, so avoid below code:

```typescript
export * from './src/something';
```
