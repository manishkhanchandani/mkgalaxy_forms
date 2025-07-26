"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const Select_1 = __importDefault(require("@mui/material/Select"));
const SelectBox = ({ name, label, value, handleChange = () => {
    return;
}, options = [], helperText, error = false, }) => {
    let showError = false;
    let hT = helperText !== null && helperText !== void 0 ? helperText : "";
    if (typeof error === "string" || typeof error === "boolean") {
        showError = !!error;
        if (error) {
            hT = error.toString();
        }
    }
    else if (typeof error === "object") {
        showError = !!error[0];
        hT = error[0];
    }
    return ((0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "10px" }, children: (0, jsx_runtime_1.jsxs)(FormControl_1.default, { variant: "standard", sx: { minWidth: 120, width: "100%" }, children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, { id: `${name}_id`, children: label }), (0, jsx_runtime_1.jsxs)(Select_1.default, { labelId: `${name}_label_id`, id: `${name}_id`, value: value, onChange: (e) => {
                        handleChange(e.target.name, e.target.value);
                    }, label: label, error: showError, name: name, children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: "", children: (0, jsx_runtime_1.jsx)("em", { children: "None" }) }), options === null || options === void 0 ? void 0 : options.map((item) => {
                            return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: item.value, children: item.label }, item.value));
                        })] }), (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: hT })] }) }));
};
exports.default = react_1.default.memo(SelectBox);
