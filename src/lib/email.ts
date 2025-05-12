import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ReservationEmailData {
  customerName: string;
  email: string;
  date: Date;
  time: string;
  partySize: number;
  notes?: string;
}

export async function sendReservationConfirmation(data: ReservationEmailData) {
  const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const emailContent = `
    <h2>Reservation Confirmation</h2>
    <p>Dear ${data.customerName},</p>
    <p>Thank you for your reservation. Here are your booking details:</p>
    <ul>
      <li><strong>Date:</strong> ${formattedDate}</li>
      <li><strong>Time:</strong> ${data.time}</li>
      <li><strong>Party Size:</strong> ${data.partySize} people</li>
      ${data.notes ? `<li><strong>Special Notes:</strong> ${data.notes}</li>` : ''}
    </ul>
    <p>We look forward to serving you!</p>
    <p>Best regards,<br>T&C Restaurant</p>
  `;

  return transporter.sendMail({
    from: process.env.SMTP_FROM || '"T&C Restaurant" <no-reply@tandcrestaurant.com>',
    to: data.email,
    subject: 'Your Reservation Confirmation',
    html: emailContent,
  });
}