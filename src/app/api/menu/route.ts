import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const menuItems = await prisma.menuItem.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(menuItems);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch menu items' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate price if provided
    if (data.price !== undefined && (typeof data.price !== 'number' || data.price <= 0)) {
      return NextResponse.json(
        { error: 'Price must be a positive number' },
        { status: 400 }
      );
    }

    const menuItem = await prisma.menuItem.create({
      data: {
        name: data.name,
        description: data.description || '',
        price: data.price,
        categoryId: data.categoryId,
        isAvailable: data.isAvailable ?? true,
        isFeatured: data.isFeatured ?? false,
        imageUrl: data.imageUrl || '',
      },
    });
    return NextResponse.json(menuItem);
  } catch (error) {
    console.error('Error creating menu item:', error);
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'Invalid category ID provided. Please check if the category exists.' },
        { status: 400 }
      );
    } else if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A menu item with this name already exists.' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'An unexpected error occurred while creating the menu item. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const menuItem = await prisma.menuItem.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        categoryId: data.categoryId,
        isAvailable: data.isAvailable,
        isFeatured: data.isFeatured,
        imageUrl: data.imageUrl,
      },
    });
    return NextResponse.json(menuItem);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update menu item' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Menu item ID is required' }, { status: 400 });
    }
    await prisma.menuItem.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete menu item' }, { status: 500 });
  }
}