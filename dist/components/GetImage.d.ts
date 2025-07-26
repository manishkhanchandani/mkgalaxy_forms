import React from "react";
import { ImageItem, InputProps } from "./types";
interface GetImageProps extends Omit<InputProps, "value"> {
    value?: ImageItem[];
}
declare const MemoizedGetImage: React.NamedExoticComponent<GetImageProps>;
export default MemoizedGetImage;
