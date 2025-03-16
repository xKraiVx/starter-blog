"use server";

import { cookies } from "next/headers";

const SESSION_EXPIRATION_IN_SECONDS =
  Number(process.env.NEXT_PUBLIC_SESSION_EXPIRATION_IN_SECONDS) ||
  60 * 60 * 24 * 7;

const SESSION_KEY = "jwt";

export const setAuthCookies = async (token: string) => {
  const cookieStore = await cookies();

  try {
    cookieStore.set(SESSION_KEY, token, {
      expires: SESSION_EXPIRATION_IN_SECONDS * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeAuthCookies = async () => {
  const cookieStore = await cookies();

  try {
    cookieStore.delete(SESSION_KEY);
  } catch (error) {
    console.error(error);
  }
};
