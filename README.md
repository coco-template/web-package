# vanillajs

![Build Status](https://img.shields.io/travis/coco-template/vanillajs/master.svg?style=flat)
[![Coverage Status](https://coveralls.io/repos/github/coco-template/vanillajs/badge.svg?branch=master)](https://coveralls.io/github/coco-template/vanillajs?branch=master)
![David](https://img.shields.io/david/coco-template/vanillajs.svg)
![David](https://img.shields.io/david/dev/coco-template/vanillajs.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/coco-template/vanillajs.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io//test/github/coco-template/vanillajs/badge.svg?targetFile=package.json)](https://snyk.io//test/github/coco-template/vanillajs?targetFile=package.json)

create NPM, browser compatible package with typescript.

## Usage

```shell
# browser development server
npm run dev;

# unit test with coverage
npm run test;

# production compile
npm run compile;
```

## Attention

+ tsc compiler compile without `polyfill`, which means `esnext` native
+ babel compiler compile both `commonjs` and `esm` style
+ remember to change meta field in the `package.json`
+ compile script automatically run before publish, no need for manual compile

## Contact

hjj491229492@hotmail.com

## License

MIT
