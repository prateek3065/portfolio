"use server";

import { signOut } from "@/auth";

export const _signOut = async () => {
  await signOut({ redirectTo: "/home" });
};
