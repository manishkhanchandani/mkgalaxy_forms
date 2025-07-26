import React from "react";
interface Props {
    name: string;
    label: string;
    value: string;
    handleChange: (n: string, v: string) => void;
    handleKeyDown?: React.KeyboardEventHandler<HTMLDivElement | HTMLTextAreaElement>;
    handleBlur?: (n: string, v: string) => void;
    disabled?: boolean;
    type?: string;
    helperText?: string;
    error?: string;
    start?: string;
    end?: string;
    maxRows?: number;
    htmlInputs?: Pick<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "rows" | "cols" | "placeholder" | "minLength" | "maxLength" | "wrap">;
}
declare const _default: React.NamedExoticComponent<Readonly<Props>>;
export default _default;
