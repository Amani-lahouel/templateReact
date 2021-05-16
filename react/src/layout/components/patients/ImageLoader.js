"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var anonymousImg = window.origin + "/content/anonymous-400.jpg";
var ImageLoader = function (_a) {
    var src = _a.src, _b = _a.size, size = _b === void 0 ? 40 : _b, _c = _a.onLoad, onLoad = _c === void 0 ? function () { return null; } : _c;
    var input = react_1.useRef(null);
    var _d = react_1.useState(anonymousImg), img = _d[0], setImg = _d[1];
    react_1.useEffect(function () {
        if (!src) {
            onLoad(img);
        }
        return function () {
            setImg(null);
        };
    }, []);
    var handleClick = function () { return input.current.click(); };
    var handleLoad = function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            var result = reader.result;
            onLoad(result);
            setImg(result);
        };
        reader.readAsDataURL(file);
    };
    var icon = react_1["default"].createElement("span", { className: 'icofont icofont-ui-user ml-2' });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("input", { ref: input, onChange: handleLoad, type: 'file', style: { display: 'none' } }),
        react_1["default"].createElement("div", { className: 'd-flex align-items-center' },
            react_1["default"].createElement(antd_1.Avatar, { src: src || img, size: size, className: 'mr-4' }),
            react_1["default"].createElement(antd_1.Button, { type: 'primary', className: 'btn-outline', onClick: handleClick },
                "Select image ",
                icon))));
};
exports["default"] = ImageLoader;
