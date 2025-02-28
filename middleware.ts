import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

// export { auth as middleware } from "@/auth"

const protectedRoute = "/admin/bookmarks";
console.log("middleware is running...");

export async function middleware(req: NextRequest) {

    const email = (await getCookie("userEmail", { req })) as string;
    const isAdmin = email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const pathname = req.nextUrl.pathname;
  console.log("finding sessions...", isAdmin, process.env.NEXT_PUBLIC_ADMIN_EMAIL, email);
  if (isAdmin || pathname !== protectedRoute) {
    // if the user is an admin or the route is not protected, continue
    return NextResponse.next();
  } else if (isAdmin && pathname === protectedRoute) {
    // if the user is an admin and the route is protected, continue
    return NextResponse.next();
  } else if (!isAdmin && pathname === protectedRoute) {
    // if the user is not an admin and the route is protected, redirect to the bookmarks page
    return NextResponse.redirect(new URL("/bookmarks", req.url));
  }

  // else continue
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
