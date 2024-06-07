"use server";

import * as crypto from "crypto";

/**
 *
 * @param hashedPassword hashed password
 * @returns boolean
 */
export const checkPasswordValidity = async (hashedPassword: string | null) => {
  /** Additional checks can go here */
  const ADMIN_PASS = process.env.ADMIN_PASS;

  if (!ADMIN_PASS) {
    throw new Error("Admin password environement variable is not set");
  }

  const hashed_ADMIN_PASS = await getHashFromString(ADMIN_PASS);

  return hashedPassword === hashed_ADMIN_PASS;
};

export const getHashFromString = (string: string) => {
  return crypto.createHash("sha256").update(string).digest("hex");
};
