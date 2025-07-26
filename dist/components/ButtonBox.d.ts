import React from "react";
type Props = {
    variant?: "contained" | "outlined" | "text";
    label: string;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
    handleClick?: () => void;
    disabled?: boolean;
    className?: string;
    color?: "error" | "inherit" | "primary" | "secondary" | "info" | "success" | "warning";
    customStyle?: any;
    customBtnStyle?: any;
};
declare const _default: React.NamedExoticComponent<Readonly<Props>>;
export default _default;
