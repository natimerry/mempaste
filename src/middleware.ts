
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies, headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

}

export const config = {
    matcher: ['/dashboard',]
}

