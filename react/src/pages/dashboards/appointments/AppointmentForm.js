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
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var formik_1 = require("formik");
var Yup = require("yup");
var ImageLoader_1 = require("../../../layout/components/patients/ImageLoader");
var hasError_1 = require("../../../utils/hasError");
var defaultSubmitText = 'Add Appointment';
var emptyAppointment = {
    date: '',
    doctor: '',
    email: '',
    fromTo: '',
    img: '',
    injury: '',
    name: '',
    number: '',
    from: '',
    to: ''
};
var appointmentSchema = Yup.object().shape({
    date: Yup.string().required(),
    doctor: Yup.string().required(),
    email: Yup.string().required(),
    injury: Yup.string().required(),
    name: Yup.string().required(),
    number: Yup.string().required(),
    from: Yup.string().required(),
    to: Yup.string().required()
});
var AppointmentForm = function (_a) {
    var _b = _a.submitText, submitText = _b === void 0 ? defaultSubmitText : _b, _c = _a.appointment, appointment = _c === void 0 ? emptyAppointment : _c, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    var _d = formik_1.useFormik({
        validationSchema: appointmentSchema,
        initialValues: appointment,
        onSubmit: function (form) {
            onSubmit(__assign(__assign({}, form), { fromTo: form.from + " - " + form.to, img: img }));
            resetForm();
        }
    }), handleSubmit = _d.handleSubmit, handleChange = _d.handleChange, handleBlur = _d.handleBlur, values = _d.values, setValues = _d.setValues, isValid = _d.isValid, errors = _d.errors, touched = _d.touched, resetForm = _d.resetForm;
    var _e = values.fromTo.split('-'), from = _e[0], to = _e[1];
    var _f = react_1.useState(values.img), img = _f[0], setImg = _f[1];
    react_1.useEffect(function () {
        setValues(__assign(__assign({}, values), { from: from, to: to }));
    }, [appointment]);
    var handleImageLoad = function (image) {
        setImg(image);
    };
    var handleCancel = function () {
        resetForm();
        onCancel();
    };
    var hasError = hasError_1.hasErrorFactory(touched, errors);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("div", { className: 'form-group' },
                react_1["default"].createElement(ImageLoader_1["default"], { onLoad: handleImageLoad, src: img })),
            react_1["default"].createElement("div", { className: 'form-group' },
                react_1["default"].createElement(antd_1.Input, { name: 'name', placeholder: 'Name', onBlur: handleBlur, onChange: handleChange, defaultValue: values.name, className: hasError('name') })),
            react_1["default"].createElement("div", { className: 'form-group' },
                react_1["default"].createElement(antd_1.Input, { defaultValue: values.doctor, placeholder: 'Doctor', onBlur: handleBlur, name: 'doctor', onChange: handleChange, className: hasError('doctor') })),
            react_1["default"].createElement("div", { className: 'form-group' },
                react_1["default"].createElement(antd_1.Input, { defaultValue: values.email, placeholder: 'Email', name: 'email', type: 'email', onBlur: handleBlur, onChange: handleChange, className: hasError('email') })),
            react_1["default"].createElement("div", { className: 'form-group' },
                react_1["default"].createElement(antd_1.Input, { defaultValue: values.date, placeholder: 'Date', name: 'date', onChange: handleChange, onBlur: handleBlur, className: hasError('date') })),
            react_1["default"].createElement("div", { className: 'row' },
                react_1["default"].createElement("div", { className: 'col-sm-12 col-md-6' },
                    react_1["default"].createElement("div", { className: 'form-group' },
                        react_1["default"].createElement(antd_1.Input, { name: 'from', placeholder: 'From', defaultValue: from, onChange: handleChange, onBlur: handleBlur, className: hasError('from') }))),
                react_1["default"].createElement("div", { className: 'col-sm-12 col-md-6' },
                    react_1["default"].createElement("div", { className: 'form-group' },
                        react_1["default"].createElement(antd_1.Input, { name: 'to', placeholder: 'To', defaultValue: to, onChange: handleChange, onBlur: handleBlur, className: hasError('to') })))),
            react_1["default"].createElement("div", { className: 'form-group' },
                react_1["default"].createElement(antd_1.Input, { type: 'phone', name: 'number', onBlur: handleBlur, placeholder: 'Number', onChange: handleChange, defaultValue: values.number, className: hasError('number') })),
            react_1["default"].createElement("div", { className: 'form-group' },
                react_1["default"].createElement(antd_1.Input, { name: 'injury', placeholder: 'Injury', onChange: handleChange, defaultValue: values.injury, onBlur: handleBlur, className: hasError('injury') })),
            react_1["default"].createElement("div", { className: 'd-flex justify-content-between buttons-list settings-actions' },
                react_1["default"].createElement(antd_1.Button, { danger: true, onClick: handleCancel }, "Cancel"),
                react_1["default"].createElement(antd_1.Button, { disabled: !isValid, type: 'primary', htmlType: 'submit' }, submitText)))));
};
exports["default"] = AppointmentForm;
