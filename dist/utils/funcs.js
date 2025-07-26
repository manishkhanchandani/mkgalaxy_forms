"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.utubeIDGrabber = exports.kilometersTo = exports.milesTo = exports.radiansTo = exports.handleError = exports.checkError = exports.clearSessionStorage = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const clearSessionStorage = (appId, url) => __awaiter(void 0, void 0, void 0, function* () {
    localStorage.removeItem(`Parse/${appId}/currentUser`);
    js_cookie_1.default.remove("session.sig", { path: "/" });
    js_cookie_1.default.remove("session", { path: "/" });
    window.location.href = url !== null && url !== void 0 ? url : "/";
});
exports.clearSessionStorage = clearSessionStorage;
const checkError = ({ err, url, appId, }) => __awaiter(void 0, void 0, void 0, function* () {
    if ("code" in err && err.code === 209) {
        yield (0, exports.clearSessionStorage)(appId, url);
    }
});
exports.checkError = checkError;
const handleError = (err, appId, url) => __awaiter(void 0, void 0, void 0, function* () {
    let errMessage = "";
    if (typeof err === "string") {
        errMessage = err;
    }
    else if (err instanceof Error && "code" in err) {
        (0, exports.checkError)({ err, url, appId });
        errMessage = err.message;
    }
    else if (err instanceof Error) {
        errMessage = err.message;
    }
    return errMessage;
});
exports.handleError = handleError;
const radiansTo = (latitude, longitude, point) => {
    const d2r = Math.PI / 180.0;
    const lat1rad = latitude * d2r;
    const long1rad = longitude * d2r;
    const lat2rad = point.latitude * d2r;
    const long2rad = point.longitude * d2r;
    const sinDeltaLatDiv2 = Math.sin((lat1rad - lat2rad) / 2);
    const sinDeltaLongDiv2 = Math.sin((long1rad - long2rad) / 2); // Square of half the straight line chord distance between both points.
    let a = sinDeltaLatDiv2 * sinDeltaLatDiv2 +
        Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
    a = Math.min(1.0, a);
    return 2 * Math.asin(Math.sqrt(a));
};
exports.radiansTo = radiansTo;
const milesTo = (latitude, longitude, point) => {
    console.log("l:", latitude, ", ", latitude, ", ", point);
    return (0, exports.radiansTo)(latitude, longitude, point) * 3958.8;
};
exports.milesTo = milesTo;
const kilometersTo = (latitude, longitude, point) => {
    return (0, exports.radiansTo)(latitude, longitude, point) * 6371.0;
};
exports.kilometersTo = kilometersTo;
const utubeIDGrabber = (url) => {
    if (!url) {
        return "";
    }
    const regExp = /^(?:.*(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/|live\/|watch\?v=|&v=))([^#&?]+)/;
    const match = regExp.exec(url);
    const id = match && match[1].length === 11 ? match[1] : false;
    return id;
};
exports.utubeIDGrabber = utubeIDGrabber;
const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
exports.generateRandomString = generateRandomString;
