
"use server";

import { cookies } from "next/headers";
export async function getAuth(troll: string) {
    const auth = cookies().get(troll);
    return auth
};