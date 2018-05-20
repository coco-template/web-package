/**
 * @description - webpack develop package
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

const preset = require('@coco-platform/webpack-preset/lib/webpack.development');

// scope
const options = {
  entry: './src/main.ts',
};

module.exports = preset(options);
