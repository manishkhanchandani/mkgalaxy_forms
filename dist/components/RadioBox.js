"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const Radio_1 = __importDefault(require("@mui/material/Radio"));
const RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
const FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
const RadioBox = ({ options, title, name, handleChange, vals, }) => {
    const [value, setValue] = React.useState("");
    const handleToggle = (event) => {
        setValue(event.target.value);
        handleChange(name, event.target.value);
    };
    React.useEffect(() => {
        setValue(vals);
    }, [vals]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(FormControl_1.default, { children: [(0, jsx_runtime_1.jsx)(FormLabel_1.default, { id: "demo-controlled-radio-buttons-group", children: title }), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { "aria-labelledby": "demo-controlled-radio-buttons-group", name: "controlled-radio-buttons-group", value: value, onChange: handleToggle, children: options.map((item) => {
                        return ((0, jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: item.value, control: (0, jsx_runtime_1.jsx)(Radio_1.default, {}), label: item.primary }), (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: item.secondary })] }, item.value));
                    }) })] }) }));
};
exports.default = React.memo(RadioBox);
