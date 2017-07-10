/**
 * @description - rollup configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

'use strict';

const resolve = require('rollup-plugin-node-resolve');
const Meta = require('./package.json');
const ExternalList = [...Reflect.ownKeys(Meta.dependencies), ...Reflect.ownKeys(Meta.devDependencies)];

module.exports = {
  entry: Meta.module,
  plugins: [
    resolve(),
  ],
  external: (id) => {
    return ExternalList.some((name) => id.startsWith(name));
  },
  targets: [
    { dest: 'bundle/coco.common.js', format: 'cjs' },
    { dest: 'bundle/coco.esm.js', format: 'es' }
  ]
};
