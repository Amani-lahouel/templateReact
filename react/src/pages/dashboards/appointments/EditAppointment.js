"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppointmentForm_1 = require("./AppointmentForm");
var antd_1 = require("antd");
var EditAppointment = function (_a) {
    var appointment = _a.appointment, visible = _a.visible, onClose = _a.onClose, onEdited = _a.onEdited;
    return (react_1["default"].createElement(antd_1.Modal, { visible: visible, onCancel: onClose, destroyOnClose: true, footer: null, title: react_1["default"].createElement("h3", { className: 'title' }, "Edit appointment") },
        react_1["default"].createElement(AppointmentForm_1["default"], { onCancel: onClose, onSubmit: onEdited, appointment: appointment, submitText: 'Edit appointment' })));
};
exports["default"] = EditAppointment;
