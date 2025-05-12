import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { sendReservationConfirmation } from '@/lib/email';
// Initialize PrismaClient as a singleton to avoid multiple instances
const prisma = new PrismaClient({
  log: ['error'], // Optional: Log errors for debugging
});

// Close PrismaClient connection on process termination
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
});

export async function GET() {
  const reservations = await prisma.reservation.findMany({
    // orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(reservations);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const reservation = await prisma.reservation.create({
      data: {
        customerName: body.customerName,
        email: body.email,
        phone: body.phone,
        date: new Date(body.date),
        time: body.time,
        partySize: parseInt(body.partySize),
        notes: body.notes,
      }
    });
    // Send confirmation email
    try {
      await sendReservationConfirmation({
        customerName: reservation.customerName,
        email: reservation.email,
        date: reservation.date,
        time: reservation.time,
        partySize: reservation.partySize,
        notes: reservation.notes || undefined,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't return error here as the reservation was successful
    }

    return NextResponse.json(reservation);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create reservation' }, { status: 400 });
  }
}