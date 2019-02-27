"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
function Column(props) {
    var _a = props.sm, sm = _a === void 0 ? 1 : _a, _b = props.md, md = _b === void 0 ? 0 : _b, _c = props.lg, lg = _c === void 0 ? 0 : _c, _d = props.xl, xl = _d === void 0 ? 0 : _d, children = props.children, className = props.className, innerRef = props.innerRef, extraProps = __rest(props, ["sm", "md", "lg", "xl", "children", "className", "innerRef"]);
    var smUnits = sm && (sm * 5) % 1 ? 24 : 5;
    var mdUnits = md && (md * 5) % 1 ? 24 : 5;
    var lgUnits = lg && (lg * 5) % 1 ? 24 : 5;
    var xlUnits = xl && (xl * 5) % 1 ? 24 : 5;
    var classes = classnames_1.default(sm === 1 ? 'pure-u-1' : "pure-u-" + Math.round(sm * smUnits) + "-" + smUnits, sm === 1 ? 'pure-u-sm-1' : "pure-u-sm-" + Math.round(sm * smUnits) + "-" + smUnits, md === 1 ? 'pure-u-md-1' : "pure-u-md-" + Math.round(md * mdUnits) + "-" + mdUnits, lg === 1 ? 'pure-u-lg-1' : "pure-u-lg-" + Math.round(lg * lgUnits) + "-" + lgUnits, xl === 1 ? 'pure-u-xl-1' : "pure-u-xl-" + Math.round(xl * xlUnits) + "-" + xlUnits, className);
    return (React.createElement("div", __assign({ className: classes }, extraProps, { ref: function (it) { return innerRef && innerRef(it); } }), children));
}
exports.Column = Column;
exports.default = Column;
