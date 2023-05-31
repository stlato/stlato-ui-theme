"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge = void 0;
var isPlainObject = function (item) {
    return item !== null && typeof item === 'object' && item.constructor === Object;
};
var deepClone = function (source) {
    if (!isPlainObject(source)) {
        return source;
    }
    var output = {};
    Object.keys(source).forEach(function (key) {
        output[key] = deepClone(source[key]);
    });
    return output;
};
var deepMerge = function (target, source, options) {
    var _a;
    if (options === void 0) { options = { clone: true }; }
    var hasOption = (_a = options === null || options === void 0 ? void 0 : options.clone) !== null && _a !== void 0 ? _a : false;
    var output = hasOption ? __assign({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (key === '__proto__') {
                return;
            }
            if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
                output[key] = (0, exports.deepMerge)(target[key], source[key], options);
            }
            else if (options.clone !== undefined) {
                output[key] = isPlainObject(source[key])
                    ? deepClone(source[key])
                    : source[key];
            }
            else {
                output[key] = source[key];
            }
        });
    }
    return output;
};
exports.deepMerge = deepMerge;
//# sourceMappingURL=deepMerge.js.map