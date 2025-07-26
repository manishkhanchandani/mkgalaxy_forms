declare const AlertBox: ({ message, title, severity, }: {
    message?: string;
    title: string;
    severity?: "error" | "info" | "success" | "warning";
}) => import("react/jsx-runtime").JSX.Element;
export default AlertBox;
