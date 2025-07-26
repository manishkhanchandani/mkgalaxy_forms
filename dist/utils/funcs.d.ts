export declare const clearSessionStorage: (appId: string, url?: string) => Promise<void>;
export declare const checkError: ({ err, url, appId, }: {
    err: Error;
    url?: string | undefined;
    appId: string;
}) => Promise<void>;
export declare const handleError: (err: unknown, appId: string, url?: string) => Promise<string>;
interface GeoPoint {
    latitude: number;
    longitude: number;
}
export declare const radiansTo: (latitude: number, longitude: number, point: GeoPoint) => number;
export declare const milesTo: (latitude: number, longitude: number, point: GeoPoint) => number;
export declare const kilometersTo: (latitude: number, longitude: number, point: GeoPoint) => number;
export declare const utubeIDGrabber: (url: string) => string | false;
export declare const generateRandomString: (length: number) => string;
export {};
