"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var AppointmentImg = function (_a) {
    var img = _a.img;
    var isData = img.startsWith('data:image');
    var isWithPath = img.startsWith('http');
    if (isData || isWithPath) {
        return react_1["default"].createElement(antd_1.Avatar, { size: 40, src: img });
    }
    return react_1["default"].createElement(antd_1.Avatar, { size: 40, src: window.location.origin + "/" + img });
};
var columns = [
    {
        key: 'img',
        title: 'Photo',
        dataIndex: 'img',
        render: function (img) { return react_1["default"].createElement(AppointmentImg, { img: img }); }
    },
    {
        key: 'name',
        dataIndex: 'name',
        title: 'Name',
        sorter: function (a, b) { return (a.name > b.name ? 1 : -1); },
        render: function (name) { return react_1["default"].createElement("strong", null, name); }
    },
    {
        key: 'email',
        dataIndex: 'email',
        title: 'Email',
        sorter: function (a, b) { return (a.email > b.email ? 1 : -1); },
        render: function (email) { return (react_1["default"].createElement("span", { className: 'nowrap', style: { color: '#336cfb' } },
            react_1["default"].createElement("span", { className: 'icofont icofont-ui-email mr-1', style: { fontSize: 16 } }),
            email)); }
    },
    {
        key: 'data',
        dataIndex: 'date',
        title: 'Date',
        render: function (date) { return (react_1["default"].createElement("span", { className: 'nowrap', style: { color: '#a5a5a5' } }, date)); }
    },
    {
        key: 'visit',
        title: 'Visit time',
        render: function (appointment) { return (react_1["default"].createElement("span", { className: 'nowrap', style: { color: '#a5a5a5' } }, appointment.fromTo)); }
    },
    {
        key: 'number',
        dataIndex: 'number',
        title: 'Number',
        render: function (phone) { return (react_1["default"].createElement("span", { className: 'd-flex align-baseline nowrap', style: { color: '#336cfb' } },
            react_1["default"].createElement("span", { className: 'icofont icofont-ui-cell-phone mr-1', style: { fontSize: 16 } }),
            phone)); }
    },
    { key: 'doctor', title: 'Doctor', dataIndex: 'doctor' },
    { key: 'condition', title: 'Injury/Condition', dataIndex: 'injury' },
    {}
];
var AppointmentsTable = function (_a) {
    var data = _a.data, actions = _a.actions;
    var actionColumn = {
        key: 'actions',
        title: 'Actions',
        render: actions
    };
    var displayedColumns = actions ? __spreadArray(__spreadArray([], columns), [actionColumn]) : columns;
    return (react_1["default"].createElement(antd_1.Table, { rowKey: 'number', dataSource: data, columns: displayedColumns, pagination: { hideOnSinglePage: true } }));
};
exports["default"] = AppointmentsTable;
