
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies, headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    if (!request.cookies.has('Auth-Token')) {
        console.log("COOKIE NOT FOUND")
        return NextResponse.redirect(new URL('/', request.url))
    }
    const auth = cookies().get('Auth-Token');
    let api_endpoint = process.env.NEXT_PUBLIC_API_URL?.concat("validate");
    const res = await fetch(api_endpoint!, {
        headers: {
            Cookie: `Auth-Token=${auth?.value};`
        }
    });

    if (!res.ok) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: ['/dashboard',]
}

