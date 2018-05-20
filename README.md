# web-package

![Build Status](https://img.shields.io/travis/coco-template/web-package/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-template/web-package/badge.svg?branch=master)](https://coveralls.io/github/coco-template/web-package?branch=master)
![Package Dependency](https://david-dm.org/coco-template/web-package.svg?style=flat)
![Package DevDependency](https://david-dm.org/coco-template/web-package/dev-status.svg?style=flat)

A lite seed to develop package with typescript.

## Attention

* use typescript for test suits.
* avoid below code for `babel-plugin-transform-runtime` weired issue:

```typescript
export * from './src/something';
```

## Usage

```shell
# start develop server
npm run dev;

# unit test
npm run test;

# production compile
npm run compile;
```

## Contact

hjj491229492@hotmail.com

## License

MIT
