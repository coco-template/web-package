/**
 * @description - typescript coco example lib
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
/**
 * @description - typescript coco example lib
 * @author - huang.jian <hjj491229492@hotmail.com>
 */ export var Mappings;
(function (Mappings) {
    Mappings[Mappings["zgyd"] = '中国移动'] = "zgyd";
    Mappings[Mappings["zglt"] = '中国联通'] = "zglt";
})(Mappings || (Mappings = {}));
/**
 * @description - translate mobile operator symbol into chinese name
 *
 * @param {string} symbol
 */
export function translateOperatorSymbol(symbol) {
    return Mappings[symbol];
}
//# sourceMappingURL=coco.js.map