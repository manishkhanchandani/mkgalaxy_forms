"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const ButtonBox = ({ variant = "contained", label, fullWidth = true, type = "button", handleClick, disabled = false, className = "", color = "secondary", customStyle = {}, customBtnStyle = {}, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "common button-box", style: Object.assign({ marginBottom: "0.5rem", marginTop: "0.5rem", flex: 1 }, customStyle), children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, fullWidth: fullWidth, type: type, onClick: () => {
                handleClick === null || handleClick === void 0 ? void 0 : handleClick();
            }, disabled: disabled, className: className, color: color, sx: Object.assign({}, customBtnStyle), children: label }) }));
};
exports.default = react_1.default.memo(ButtonBox);
