import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname.startsWith('/studio')) {
    const token = request.nextUrl.searchParams.get('token');
    const allowedToken = process.env.STUDIO_ACCESS_TOKEN;

    if (token !== allowedToken) {
      return new NextResponse('Access Denied', { status: 401 });
    }
  }

  return NextResponse.next();
}
