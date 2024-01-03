import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
//   console.log("middleware run");
if(request.nextUrl.pathname != "/login"){
    return NextResponse.redirect(new URL('/login', request.url))
}

  return NextResponse.json({ success: "midleware succesfully run" });
}

export const config = {
  matcher: "/userslist/:path*",
};
