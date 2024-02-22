import { cookies } from "next/headers"
import { type UserSession } from "@/api/Authentication/getSession";
import { jwtDecode } from "jwt-decode";

export const getSessionServerAction = async () => {
  const sessionCookie = cookies().get("auth.sessionToken");
  if (!sessionCookie) return null;
  const token = jwtDecode(sessionCookie.value);
  return {
    ...token,
    accessToken: sessionCookie.value,
  } as UserSession;
};
