import { Cipher } from "./Cipher";
import { NotSupportedError } from "@alumis/utils/src/NotSupportedError";
import { uint8ArrayToBase64 } from "@alumis/utils/src/uint8ArrayToBase64";

/** Generates a random password which strength matches the given cipher */
export function generateRandomPassword(cipher = Cipher.AES256) {

    if (cipher === Cipher.AES256)
        return uint8ArrayToBase64(crypto.getRandomValues(new Uint8Array(32)));

    throw new NotSupportedError();
}