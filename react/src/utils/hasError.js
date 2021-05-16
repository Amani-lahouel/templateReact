"use strict";
exports.__esModule = true;
exports.hasErrorFactory = void 0;
var DEFAULT_ERROR_CLASS = 'has-error';
function hasErrorFactory(touched, errors, errorClass) {
    if (errorClass === void 0) { errorClass = DEFAULT_ERROR_CLASS; }
    return function (name) {
        var hasError = errors[name];
        var isTouched = touched[name];
        if (isTouched && hasError) {
            return errorClass;
        }
        return null;
    };
}
exports.hasErrorFactory = hasErrorFactory;
