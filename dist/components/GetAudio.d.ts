import React from "react";
import { InputProps } from "./types";
interface AudioItem {
    id: string;
    value: {
        mp3: string;
        ogg: string;
    };
}
interface GetAudioProps extends Omit<InputProps, "value"> {
    value: AudioItem[];
}
declare const MemoizedGetAudio: React.NamedExoticComponent<GetAudioProps>;
export default MemoizedGetAudio;
