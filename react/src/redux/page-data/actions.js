"use strict";
exports.__esModule = true;
exports.resetPageData = exports.updatePageDada = exports.setPageData = void 0;
var types_1 = require("./types");
var setPageData = function (data) { return ({
    type: types_1.SET_PAGE_DATA,
    payload: data
}); };
exports.setPageData = setPageData;
var updatePageDada = function (data) { return ({
    type: types_1.UPDATE_PAGE_DATA,
    payload: data
}); };
exports.updatePageDada = updatePageDada;
var resetPageData = function () { return ({
    type: types_1.RESET_PAGE_DATA
}); };
exports.resetPageData = resetPageData;
