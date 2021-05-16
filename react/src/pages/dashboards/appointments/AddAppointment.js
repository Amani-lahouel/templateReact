"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var AppointmentForm_1 = require("./AppointmentForm");
var AddAppointment = function (_a) {
    var visible = _a.visible, onClose = _a.onClose, onSubmit = _a.onSubmit;
    return (react_1["default"].createElement(antd_1.Modal, { visible: visible, onCancel: onClose, destroyOnClose: true, footer: null, title: react_1["default"].createElement("h3", { className: 'title' }, "Add appointment") },
        react_1["default"].createElement(AppointmentForm_1["default"], { onCancel: onClose, onSubmit: onSubmit, submitText: 'Add appointment' })));
};
exports["default"] = AddAppointment;
