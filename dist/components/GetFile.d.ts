import React from "react";
import { InputProps, FileItem } from "./types";
interface GetFileProps extends Omit<InputProps, "value"> {
    value?: FileItem[];
}
declare const _default: React.NamedExoticComponent<GetFileProps>;
export default _default;
