import React from "react";
interface Props {
    name: string;
    label: string;
    value: string;
    handleChange: (n: string, v: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleKeyDown?: React.KeyboardEventHandler<HTMLDivElement | HTMLInputElement | HTMLTextAreaElement>;
    handleBlur?: (n: string, v: string, e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    disabled?: boolean;
    type?: string;
    helperText?: string;
    error?: string | boolean | string[];
    start?: string;
    end?: string;
    htmlInputs?: Pick<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, "min" | "max" | "step" | "pattern" | "placeholder">;
    customStyle?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<Readonly<Props>>;
export default _default;
