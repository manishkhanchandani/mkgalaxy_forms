"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const __1 = require("../");
const Text = ({ handleChange, name, value, placeholder, label, type, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: `common text ${__1.styles.inputContainer}`, children: [(0, jsx_runtime_1.jsx)("div", { className: __1.styles.inputTitle, children: label }), (0, jsx_runtime_1.jsx)("input", { type: type, className: __1.styles.input, name: "username", value: value, onChange: (e) => {
                    handleChange(name, e.target.value);
                }, placeholder: placeholder })] }));
};
exports.default = Text;
