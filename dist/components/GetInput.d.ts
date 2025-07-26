import React from "react";
import { InputItem, InputProps } from "./types";
interface GetInputProps extends Omit<InputProps, "value"> {
    value?: InputItem[];
}
declare const _default: React.NamedExoticComponent<GetInputProps>;
export default _default;
