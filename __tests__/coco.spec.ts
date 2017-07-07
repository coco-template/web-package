/**
 * @description - coco library test suits
 */

import { translateOperatorSymbol } from '../src/coco';

describe('coco typescript lib', function () {
  it('should translate simple symbol', function () {
    expect(translateOperatorSymbol('zgyd')).toEqual('中国移动');
  });
});