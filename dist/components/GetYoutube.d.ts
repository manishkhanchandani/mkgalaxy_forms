import React from "react";
import { InputProps, YouTubeItem } from "./types";
interface GetYoutubeProps extends Omit<InputProps, "value"> {
    value?: YouTubeItem[];
}
declare const _default: React.NamedExoticComponent<GetYoutubeProps>;
export default _default;
