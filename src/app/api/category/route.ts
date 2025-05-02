import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Initialize PrismaClient as a singleton to avoid multiple instances
const prisma = new PrismaClient({
  log: ['error'], // Optional: Log errors for debugging
});

// Close PrismaClient connection on process termination
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
});

// GET: Fetch all categories with their menu items
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: { menuItems: true },
    });
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST: Create a new category
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    // Validate input
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'Category name is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    const newCategory = await prisma.category.create({
      data: { name: name.trim() },
    });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma in development to avoid connection leaks
    if (process.env.NODE_ENV === 'development') {
      await prisma.$disconnect();
    }
  }
}