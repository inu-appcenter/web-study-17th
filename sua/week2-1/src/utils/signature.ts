import CryptoJS from "crypto-js";

export function generateSignature(
  method: string,
  url: string,
  timestamp: string,
  accessKey: string,
  secretKey: string
): string {
  const space = " "; // 한 칸 공백
  const newLine = "\n"; // 개행 문자

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timestamp);
  hmac.update(newLine);
  hmac.update(accessKey);

  return hmac.finalize().toString(CryptoJS.enc.Base64);
}
