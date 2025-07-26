export declare const clearSessionStorage: (appId: string, url?: string) => Promise<void>;
export declare const checkError: ({ err, url, appId, }: {
    err: Error;
    url?: string;
    appId: string;
}) => Promise<void>;
export declare const handleError: (err: unknown, appId: string, url?: string) => Promise<string>;
export declare const radiansTo: (latitude: number, longitude: number, point: any) => number;
export declare const milesTo: (latitude: number, longitude: number, point: any) => number;
export declare const kilometersTo: (latitude: number, longitude: number, point: any) => number;
export declare const utubeIDGrabber: (url: string) => string | false;
export declare const generateRandomString: (length: number) => string;
