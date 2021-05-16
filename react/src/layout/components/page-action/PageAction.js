"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var PageAction = function (_a) {
    var onClick = _a.onClick, icon = _a.icon, type = _a.type;
    return (react_1["default"].createElement(antd_1.Button, { className: 'page-action', type: type, size: 'large', shape: 'circle', onClick: onClick },
        react_1["default"].createElement("span", { className: "icofont " + icon, style: { fontSize: 40 } })));
};
exports["default"] = PageAction;
