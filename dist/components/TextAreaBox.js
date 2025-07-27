"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
const TextAreaBox = ({ name, label, value, handleChange, handleKeyDown, handleBlur, disabled, type = "text", helperText, error, start, end, maxRows, htmlInputs, }) => {
    let showError = false;
    let hT = helperText;
    if (typeof error === "string" || typeof error === "boolean") {
        showError = !!error;
        if (error) {
            hT = error;
        }
    }
    else if (typeof error === "object") {
        showError = !!error[0];
        hT = error[0];
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "common textarea-box", style: { marginBottom: "20px", marginTop: "20px" }, children: (0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ sx: {
                boxShadow: "none",
                "& .MuiInputBase-root": {
                    display: "flex",
                    alignItems: "center",
                    minHeight: "3em",
                },
            }, fullWidth: true, type: type, label: label, name: name, value: value, onKeyDown: handleKeyDown, multiline: true, maxRows: maxRows, onChange: (e) => {
                handleChange === null || handleChange === void 0 ? void 0 : handleChange(e.target.name, e.target.value);
            }, onBlur: (e) => {
                handleBlur === null || handleBlur === void 0 ? void 0 : handleBlur(e.target.name, e.target.value);
            }, disabled: disabled, helperText: hT, error: showError }, htmlInputs, { variant: "outlined" }, (start || end
            ? {
                // Using input prop directly for adornments
                startAdornment: start ? ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: start })) : null,
                endAdornment: end ? ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "end", children: end })) : null,
            }
            : {}))) }));
};
exports.default = react_1.default.memo(TextAreaBox);
