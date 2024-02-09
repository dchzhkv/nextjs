import { getUserSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { isAuthenticated } = await getUserSession();

  return NextResponse.json({ authenticated: isAuthenticated }, { status: 401 })
}