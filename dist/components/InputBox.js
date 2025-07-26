"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
const InputBox = ({ name, label, value, handleChange, handleKeyDown, handleBlur, disabled, type = "text", helperText, error, start, end, htmlInputs, customStyle = {}, }) => {
    let showError = false;
    let hT = helperText;
    if (typeof error === "string" || typeof error === "boolean") {
        showError = !!error;
        if (error && typeof error === "string") {
            hT = error;
        }
    }
    else if (typeof error === "object") {
        showError = !!error[0];
        hT = error[0];
    }
    return ((0, jsx_runtime_1.jsx)("div", { style: customStyle || { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(TextField_1.default, { sx: { boxShadow: "none" }, fullWidth: true, type: type, label: label, name: name, value: value, onKeyDown: handleKeyDown, onChange: (e) => {
                handleChange === null || handleChange === void 0 ? void 0 : handleChange(e.target.name, e.target.value, e);
            }, onBlur: (e) => {
                handleBlur === null || handleBlur === void 0 ? void 0 : handleBlur(e.target.name, e.target.value, e);
            }, disabled: disabled, helperText: hT, error: showError, slotProps: {
                input: {
                    startAdornment: start ? ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: start })) : null,
                    endAdornment: end ? ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "end", children: end })) : null,
                    sx: {
                        height: "3.50em",
                    },
                },
                htmlInput: Object.assign({}, htmlInputs),
            } }) }));
};
exports.default = react_1.default.memo(InputBox);
