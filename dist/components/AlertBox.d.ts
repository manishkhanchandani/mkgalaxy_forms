declare const AlertBox: ({ message, title, severity, }: {
    message?: string | undefined;
    title: string;
    severity?: "error" | "info" | "success" | "warning" | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default AlertBox;
