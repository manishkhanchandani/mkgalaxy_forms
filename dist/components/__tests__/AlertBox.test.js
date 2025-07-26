"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const AlertBox_1 = __importDefault(require("../AlertBox"));
describe("AlertBox", () => {
    it("renders with title and message", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(AlertBox_1.default, { title: "Test Title", message: "Test Message" }));
        expect(react_1.screen.getByText("Test Title")).toBeInTheDocument();
        expect(react_1.screen.getByText("Test Message")).toBeInTheDocument();
    });
    it("renders with default error severity", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(AlertBox_1.default, { title: "Test Title" }));
        const alert = react_1.screen.getByRole("alert");
        expect(alert).toHaveClass("MuiAlert-standardError");
    });
    it("renders with custom severity", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(AlertBox_1.default, { title: "Test Title", severity: "success" }));
        const alert = react_1.screen.getByRole("alert");
        expect(alert).toHaveClass("MuiAlert-standardSuccess");
    });
});
