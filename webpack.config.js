/**
 * @description - webpack develop package
 * @author - huang.jian <hjj491229492@hotmail.com>
 */

const { development } = require('@coco-platform/webpack-preset');

// scope
const options = {
  entry: './public/main.ts',
  typescript: true,
};

module.exports = development(options);
