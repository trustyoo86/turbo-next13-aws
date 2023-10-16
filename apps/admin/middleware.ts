import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set('test', 'fast');

  console.log('request =>', request);
  console.log('response =>', response);

  return response;

}
