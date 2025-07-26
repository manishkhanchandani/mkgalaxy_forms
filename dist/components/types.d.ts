export interface AudioItem {
    id: string;
    value: {
        mp3: string;
        ogg: string;
    };
}
export interface ImageItem {
    id: string;
    value: string;
}
export interface FileItem {
    id: string;
    value: string;
}
export interface InputItem {
    id: string;
    value: string;
}
export interface YouTubeItem {
    id: string;
    value: string;
}
export type InputValue = string | number | boolean | File | File[] | AudioItem[] | ImageItem[] | FileItem[] | InputItem[] | YouTubeItem[] | null;
export type InputProps = {
    onHandleChange?: (name: string, value: InputValue) => void;
    placeholder?: string;
    title: string;
    name: string;
    value: InputValue;
    viewOnly?: boolean;
    disabled?: boolean;
};
export type User = {
    id: string;
    username?: string;
    email?: string;
    [key: string]: unknown;
};
export type FileUploadProps = {
    handleChange?: (name: string, value: File | File[]) => void;
    prevFiles: File[];
    title: string;
    user?: User;
    isProfilePic?: boolean;
    viewOnly?: boolean;
    isMultiple?: boolean;
    hideSubmitButton?: boolean;
};
