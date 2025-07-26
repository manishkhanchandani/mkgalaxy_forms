import React from "react";
type SelectBoxTypes = {
    name: string;
    label: string;
    value: string;
    handleChange: (n: string, v: string) => void;
    options: ItemType[];
    helperText?: string;
    error?: boolean | string;
};
type ItemType = {
    label: string;
    value: string;
};
declare const _default: React.MemoExoticComponent<({ name, label, value, handleChange, options, helperText, error, }: SelectBoxTypes) => import("react/jsx-runtime").JSX.Element>;
export default _default;
