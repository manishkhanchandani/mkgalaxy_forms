"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_youtube_1 = __importDefault(require("react-youtube"));
const __1 = require("../");
const opts = {
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1,
        enablejsapi: 1,
    },
};
const GetYoutube = ({ onHandleChange, title, name, value = [], viewOnly = false, disabled = false, }) => {
    const [currentValue, setCurrentValue] = react_1.default.useState("");
    const keyDown = (e) => {
        e.persist();
        if (e.key === "Enter") {
            handleSubmit();
        }
    };
    const handleDelete = (index) => {
        const values = [...value];
        values.splice(index, 1);
        onHandleChange === null || onHandleChange === void 0 ? void 0 : onHandleChange(name, values);
    };
    const handleSubmit = () => {
        if (!currentValue) {
            return;
        }
        const values = [
            ...value,
            { id: (0, __1.utubeIDGrabber)(currentValue) || "", value: currentValue },
        ];
        onHandleChange === null || onHandleChange === void 0 ? void 0 : onHandleChange(name, values);
        setCurrentValue("");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "youtube", style: { position: "relative", marginTop: 20 }, children: [!viewOnly && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "16px" }, children: [(0, jsx_runtime_1.jsx)(__1.InputBox, { name: name, value: currentValue, handleChange: (_name, value) => {
                                setCurrentValue(value);
                            }, label: title, disabled: disabled, type: "search", customStyle: { flex: 3 }, handleKeyDown: keyDown }), (0, jsx_runtime_1.jsx)(__1.ButtonBox, { type: "button", label: "Add", handleClick: handleSubmit, customBtnStyle: { height: "50px" }, customStyle: { marginTop: 0, marginBottom: 0 } })] }) })), (value === null || value === void 0 ? void 0 : value.length) > 0 && ((0, jsx_runtime_1.jsxs)("div", { style: {
                    border: "1px solid",
                    padding: "10px",
                    boxShadow: "5px 10px 8px 10px #888888",
                }, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Youtube Videos" }), (0, jsx_runtime_1.jsx)("div", { children: value.map((item, index) => {
                            return ((0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: "40px" }, children: [!viewOnly && ((0, jsx_runtime_1.jsx)("div", { className: "text-center", style: {
                                            color: "blue",
                                            cursor: "pointer",
                                            marginBottom: "1.2em",
                                        }, "aria-hidden": "true", onClick: () => {
                                            handleDelete(index);
                                        }, children: "Delete" })), (0, jsx_runtime_1.jsx)("div", { className: "embed-responsive embed-responsive-16by9", children: (0, jsx_runtime_1.jsx)(react_youtube_1.default, { videoId: item.id, opts: opts, className: "embed-responsive-item" }) })] }, item.id));
                        }) })] }))] }));
};
exports.default = react_1.default.memo(GetYoutube);
