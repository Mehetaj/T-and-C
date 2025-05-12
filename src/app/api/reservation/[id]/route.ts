import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: params.id }
    });
    if (!reservation) {
      return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
    }
    return NextResponse.json(reservation);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reservation' }, { status: 400 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const updated = await prisma.reservation.update({
      where: { id: params.id },
      data: {
        customerName: body.customerName,
        email: body.email,
        phone: body.phone,
        date: body.date ? new Date(body.date) : undefined,
        time: body.time,
        partySize: body.partySize ? parseInt(body.partySize) : undefined,
        status: body.status,
        notes: body.notes,
      }
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update reservation' }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.reservation.delete({
      where: { id: params.id }
    });
    return NextResponse.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete reservation' }, { status: 400 });
  }
}