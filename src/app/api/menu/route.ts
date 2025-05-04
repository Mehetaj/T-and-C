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

// GET: Fetch all menu items with their categories
export async function GET() {
  try {
    const menuItems = await prisma.menuItem.findMany({
      include: { category: true },
    });
    return NextResponse.json(menuItems, { status: 200 });
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch menu items' },
      { status: 500 }
    );
  }
}

// POST: Create a new menu item
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, price, categoryId, isAvailable, isFeatured, imageUrl } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'Menu item name is required and must be a non-empty string' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string') {
      return NextResponse.json(
        { error: 'Description is required and must be a string' },
        { status: 400 }
      );
    }

    if (!price || typeof price !== 'number' || price <= 0) {
      return NextResponse.json(
        { error: 'Price is required and must be a positive number' },
        { status: 400 }
      );
    }

    if (!categoryId || typeof categoryId !== 'string') {
      return NextResponse.json(
        { error: 'Category ID is required and must be a string' },
        { status: 400 }
      );
    }

    const newMenuItem = await prisma.menuItem.create({
      data: {
        name: name.trim(),
        description,
        price,
        categoryId,
        isAvailable: isAvailable ?? true,
        isFeatured: isFeatured ?? false,
        imageUrl,
      },
      include: { category: true },
    });

    return NextResponse.json(newMenuItem, { status: 201 });
  } catch (error) {
    console.error('Error creating menu item:', error);
    if (error) {
      return NextResponse.json(
        { error: 'Invalid category ID provided' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create menu item' },
      { status: 500 }
    );
  }
}