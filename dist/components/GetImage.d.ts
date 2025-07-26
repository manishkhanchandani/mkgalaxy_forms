import React from "react";
interface GetImageProps {
    onHandleChange?: (name: string, value: any) => void;
    title: string;
    name: string;
    value?: Array<{
        id: string;
        value: string;
    }>;
    viewOnly?: boolean;
    disabled?: boolean;
}
declare const MemoizedGetImage: React.NamedExoticComponent<GetImageProps>;
export default MemoizedGetImage;
