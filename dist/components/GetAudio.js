"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const InputBox_1 = __importDefault(require("./InputBox"));
const ButtonBox_1 = __importDefault(require("./ButtonBox"));
const funcs_1 = require("../utils/funcs");
const GetAudio = ({ onHandleChange, title, name, value = [], viewOnly = false, disabled = false, }) => {
    const [currentValue, setCurrentValue] = react_1.default.useState({ mp3: "", ogg: "" });
    const keyDown = (e) => {
        e.persist();
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const handleChange = (type, _name, val, e) => {
        e.persist();
        setCurrentValue((fV) => {
            return Object.assign(Object.assign({}, fV), { [type]: val });
        });
    };
    const handleDelete = (index) => {
        const values = [...value];
        values.splice(index, 1);
        onHandleChange === null || onHandleChange === void 0 ? void 0 : onHandleChange(name, values);
    };
    const handleSubmit = () => {
        if (!currentValue.mp3 && !currentValue.ogg) {
            return;
        }
        const values = [
            ...value,
            { id: (0, funcs_1.generateRandomString)(10), value: currentValue },
        ];
        onHandleChange === null || onHandleChange === void 0 ? void 0 : onHandleChange(name, values);
        setCurrentValue({ mp3: "", ogg: "" });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "common common-get audio-box", style: { position: "relative", marginTop: 20 }, children: [!viewOnly && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "16px" }, children: [(0, jsx_runtime_1.jsx)(InputBox_1.default, { name: name, value: currentValue.mp3, handleChange: handleChange.bind(this, "mp3"), label: `${title} (*.mp3)`, disabled: disabled, type: "search", customStyle: { flex: 3 }, handleKeyDown: keyDown }), (0, jsx_runtime_1.jsx)(InputBox_1.default, { name: name, value: currentValue.ogg, handleChange: handleChange.bind(this, "ogg"), label: `${title} (*.ogg)`, disabled: disabled, type: "search", customStyle: { flex: 3 }, handleKeyDown: keyDown }), (0, jsx_runtime_1.jsx)(ButtonBox_1.default, { type: "button", label: "Add", handleClick: handleSubmit, customBtnStyle: { height: "50px" }, customStyle: { marginTop: 0, marginBottom: 0 } })] }) })), (value === null || value === void 0 ? void 0 : value.length) > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "view-box", style: {
                    border: "1px solid",
                    padding: "10px",
                    boxShadow: "5px 10px 8px 10px #888888",
                }, children: [(0, jsx_runtime_1.jsx)("h3", { children: title }), (0, jsx_runtime_1.jsx)("div", { children: value.map((item, index) => {
                            return ((0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: "40px" }, children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("audio", { controls: true, children: [item.value.mp3 ? ((0, jsx_runtime_1.jsx)("source", { src: item.value.mp3, type: "audio/mpeg" })) : ((0, jsx_runtime_1.jsx)("source", { src: item.value.ogg, type: "audio/ogg" })), (0, jsx_runtime_1.jsx)("track", { src: "/captions.vtt", kind: "captions", srcLang: "en", label: "English", default: true })] }) }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "10px" }, children: (0, jsx_runtime_1.jsx)("a", { style: { textDecoration: "none" }, href: item.value.mp3 ? item.value.mp3 : item.value.ogg, target: "_blank", rel: "noreferrer", children: "View" }) }), !viewOnly && ((0, jsx_runtime_1.jsx)("div", { className: "text-center", style: {
                                            color: "blue",
                                            cursor: "pointer",
                                            marginBottom: "1.2em",
                                        }, "aria-hidden": "true", onClick: () => {
                                            handleDelete(index);
                                        }, children: "Delete" }))] }, item.id));
                        }) })] }))] }));
};
const MemoizedGetAudio = react_1.default.memo(GetAudio);
exports.default = MemoizedGetAudio;
