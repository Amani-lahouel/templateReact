"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var EditAppointment_1 = require("./EditAppointment");
var AddAppointment_1 = require("./AddAppointment");
var AppointmentsTable_1 = require("../../../layout/components/appointmentsTable/AppointmentsTable");
var PageAction_1 = require("../../../layout/components/page-action/PageAction");
var usePage_1 = require("../../../hooks/usePage");
var pageData = {
    title: 'Appointments',
    fulFilled: false,
    breadcrumbs: [
        {
            title: 'Medicine',
            route: 'default-dashboard'
        },
        {
            title: 'Appointments'
        }
    ]
};
var AppointmentsPage = function () {
    usePage_1.usePageData(pageData);
    var _a = usePage_1.useFetchPageData('./data/appointments.json', []), appointments = _a[0], setAppointments = _a[1];
    var _b = react_1.useState(null), selectedAppointment = _b[0], setSelectedAppointment = _b[1];
    var _c = react_1.useState(false), addingModalVisibility = _c[0], setAddingModalVisibility = _c[1];
    var handleDelete = function (appointment) {
        var newAppointments = appointments.filter(function (el) { return el !== appointment; });
        setAppointments(newAppointments);
    };
    var handleEdit = function (appointment) {
        var editedAppointments = appointments.map(function (el) {
            return el !== selectedAppointment ? el : appointment;
        });
        setAppointments(editedAppointments);
        setSelectedAppointment(null);
    };
    var openAddingModal = function () { return setAddingModalVisibility(true); };
    var addAppointment = function (appointment) {
        setAppointments(__spreadArray([appointment], appointments));
        setAddingModalVisibility(false);
    };
    var closeAddingModal = function () { return setAddingModalVisibility(false); };
    var openEditModal = function (appointment) { return setSelectedAppointment(appointment); };
    var closeModal = function () {
        setSelectedAppointment(null);
    };
    var appointmentsActions = function (appointment) { return (react_1["default"].createElement("div", { className: 'buttons-list nowrap' },
        react_1["default"].createElement(antd_1.Button, { onClick: openEditModal.bind({}, appointment), shape: 'circle', type: 'primary' },
            react_1["default"].createElement("span", { className: 'icofont icofont-edit-alt' })),
        react_1["default"].createElement(antd_1.Button, { onClick: handleDelete.bind({}, appointment), shape: 'circle', danger: true },
            react_1["default"].createElement("span", { className: 'icofont icofont-ui-delete' })))); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(AppointmentsTable_1["default"], { data: appointments, actions: appointmentsActions }),
        react_1["default"].createElement(PageAction_1["default"], { onClick: openAddingModal, icon: 'icofont-stethoscope-alt', type: 'primary' }),
        react_1["default"].createElement(AddAppointment_1["default"], { onClose: closeAddingModal, visible: addingModalVisibility, onSubmit: addAppointment }),
        react_1["default"].createElement(EditAppointment_1["default"], { appointment: selectedAppointment, visible: !!selectedAppointment, onClose: closeModal, onEdited: handleEdit })));
};
exports["default"] = AppointmentsPage;
