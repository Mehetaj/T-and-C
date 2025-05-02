import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (existingUser) {
      return new NextResponse('User already exists', { status: 400 });
    }

    // Create new user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}