/**
 * @description - typescript coco example lib
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
const Mappings = {
  zglt: '中国联通',
  zgyd: '中国移动'
};
/**
 * @description - translate mobile operator symbol into chinese name
 *
 * @param {string} symbol
 */
export function translateOperatorSymbol(symbol) {
  return Mappings[symbol];
}
/**
 * @description - just test tsc compile result
 *
 * @param {string} keyword
 *
 * @return {string}
 */
export const arrow = (keyword) => `Let's search ${keyword}!!!`;
