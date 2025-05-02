import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const category = await prisma.category.findUnique({ where: { id: params.id } });
  return NextResponse.json(category);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const updated = await prisma.category.update({
    where: { id: params.id },
    data: body,
  });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.category.delete({ where: { id: params.id } });
  return NextResponse.json({ message: 'Deleted' });
}
