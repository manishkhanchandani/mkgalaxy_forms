import Cookies from "js-cookie";

export const clearSessionStorage = async (appId: string, url?: string) => {
  localStorage.removeItem(`Parse/${appId}/currentUser`);
  Cookies.remove("session.sig", { path: "/" });
  Cookies.remove("session", { path: "/" });

  window.location.href = url ?? "/";
};

export const checkError = async ({
  err,
  url,
  appId,
}: {
  err: Error;
  url?: string;
  appId: string;
}) => {
  if ("code" in err && err.code === 209) {
    await clearSessionStorage(appId, url);
  }
};

export const handleError = async (
  err: unknown,
  appId: string,
  url?: string
): Promise<string> => {
  let errMessage: string = "";
  if (typeof err === "string") {
    errMessage = err;
  } else if (err instanceof Error && "code" in err) {
    checkError({ err, url, appId });
    errMessage = err.message;
  } else if (err instanceof Error) {
    errMessage = err.message;
  }

  return errMessage;
};

interface GeoPoint {
  latitude: number;
  longitude: number;
}

export const radiansTo = (
  latitude: number,
  longitude: number,
  point: GeoPoint
) => {
  const d2r = Math.PI / 180.0;
  const lat1rad = latitude * d2r;
  const long1rad = longitude * d2r;
  const lat2rad = point.latitude * d2r;
  const long2rad = point.longitude * d2r;
  const sinDeltaLatDiv2 = Math.sin((lat1rad - lat2rad) / 2);
  const sinDeltaLongDiv2 = Math.sin((long1rad - long2rad) / 2); // Square of half the straight line chord distance between both points.

  let a =
    sinDeltaLatDiv2 * sinDeltaLatDiv2 +
    Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
  a = Math.min(1.0, a);
  return 2 * Math.asin(Math.sqrt(a));
};

export const milesTo = (
  latitude: number,
  longitude: number,
  point: GeoPoint
) => {
  console.log("l:", latitude, ", ", latitude, ", ", point);
  return radiansTo(latitude, longitude, point) * 3958.8;
};

export const kilometersTo = (
  latitude: number,
  longitude: number,
  point: GeoPoint
) => {
  return radiansTo(latitude, longitude, point) * 6371.0;
};

export const utubeIDGrabber = (url: string) => {
  if (!url) {
    return "";
  }
  const regExp =
    /^(?:.*(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/|live\/|watch\?v=|&v=))([^#&?]+)/;
  const match = regExp.exec(url);
  const id = match && match[1].length === 11 ? match[1] : false;
  return id;
};

export const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
