"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Alert_1 = __importDefault(require("@mui/material/Alert"));
const AlertTitle_1 = __importDefault(require("@mui/material/AlertTitle"));
const AlertBox = ({ message, title, severity = "error", }) => {
    return ((0, jsx_runtime_1.jsx)("div", { style: { marginTop: "10px", marginBottom: "10px" }, children: (0, jsx_runtime_1.jsxs)(Alert_1.default, { severity: severity, children: [(0, jsx_runtime_1.jsx)(AlertTitle_1.default, { children: title }), message] }) }));
};
exports.default = AlertBox;
