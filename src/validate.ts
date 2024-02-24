
"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function sendAuth(request: NextRequest) {
    const auth = cookies().get('Auth-Token');
    let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("validate");
    axios
        .post(api_endpoint! , auth)
        .catch(() => {
            return NextResponse.redirect(new URL('/login', request.url))
        })
};