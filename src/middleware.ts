
import axios from 'axios';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    let is_cookie_valid: boolean = false;
    if (!request.cookies.has('Auth-Token')) {
        console.log("COOKIE NOT FOUND")
        is_cookie_valid=false;
    }
    const auth = cookies().get('Auth-Token');
    console.log(auth);
    let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("validate");
    axios
        .post(api_endpoint!, auth)
        .catch(() => {
            console.log("COOKIE INVALID");
            is_cookie_valid=false;
        })
    
    if (!is_cookie_valid){
        return NextResponse.redirect(new URL('/', request.url))

    }
}

export const config = {
    matcher: ['/dashboard',]
}