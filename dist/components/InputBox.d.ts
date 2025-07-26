import React from "react";
interface Props {
    name: string;
    label: string;
    value: string;
    handleChange: (n: string, v: string, e: any) => void;
    handleKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    handleBlur?: (n: string, v: string, e: any) => void;
    disabled?: boolean;
    type?: string;
    helperText?: string;
    error?: string | boolean | string[];
    start?: string;
    end?: string;
    htmlInputs?: any;
    customStyle?: any;
}
declare const _default: React.NamedExoticComponent<Readonly<Props>>;
export default _default;
