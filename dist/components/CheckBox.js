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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
const ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const CheckBox = ({ options, title, name, handleChange, disabled, vals, }) => {
    const [checked, setChecked] = React.useState(vals || []);
    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        console.log("newChecked: ", newChecked);
        handleChange(name, newChecked);
        setChecked(newChecked);
    };
    React.useEffect(() => {
        setChecked(vals || []);
    }, [vals]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "button", gutterBottom: true, sx: { display: "block" }, children: title }), (0, jsx_runtime_1.jsx)(List_1.default, { sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" }, children: options.map((item, index) => {
                    const labelId = `checkbox-list-label-${index}`;
                    return ((0, jsx_runtime_1.jsx)(ListItem_1.default, { disablePadding: true, children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { role: undefined, onClick: () => {
                                console.log("newChecked: ", item);
                                if (disabled) {
                                    return;
                                }
                                console.log("newChecked1: ", item.value);
                                handleToggle(item.value);
                                console.log("newChecked2: ", item.value);
                            }, dense: true, children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { edge: "start", checked: checked.includes(item.value), tabIndex: -1, disableRipple: true, inputProps: { "aria-labelledby": labelId }, disabled: disabled }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { id: labelId, primary: item.primary, secondary: item.secondary })] }) }, item.value));
                }) })] }));
};
exports.default = React.memo(CheckBox);
