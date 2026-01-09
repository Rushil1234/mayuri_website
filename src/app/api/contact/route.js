import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, inquiryType, eventDate, message } = await request.json();

        // 1. Database Operations (Non-blocking)
        let dbSuccess = false;
        try {
            // Ensure table exists (Auto-migration for simplicity)
            await sql`CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255),
                phone VARCHAR(50),
                inquiry_type VARCHAR(50),
                event_date VARCHAR(50),
                message TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`;

            // Insert Record
            await sql`INSERT INTO contacts (name, email, phone, inquiry_type, event_date, message)
                      VALUES (${name}, ${email}, ${phone}, ${inquiryType}, ${eventDate}, ${message});`;
            dbSuccess = true;
        } catch (dbError) {
            console.error('Database Operation Failed (Non-fatal):', dbError);
            // We continue to email sending even if DB fails
        }

        // 2. Email Notification to Admin
        let emailSuccess = false;
        // Only run if environment variables are present
        if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_PASS, // App Password
                    },
                });

                const mailOptions = {
                    from: `"MK Studio Bot" <${process.env.GMAIL_USER}>`,
                    to: 'mayurikakkad@gmail.com',
                    subject: `New Client Inquiry: ${name}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; color: #333;">
                            <h2 style="color: #D4AF37;">New Client Inquiry</h2>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Phone:</strong> ${phone}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Service:</strong> ${inquiryType}</p>
                            <p><strong>Date:</strong> ${eventDate}</p>
                            <hr style="border: 1px solid #eee; margin: 20px 0;" />
                            <p><strong>Message:</strong></p>
                            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                        </div>
                    `,
                };

                await transporter.sendMail(mailOptions);
                console.log('Admin notification email sent successfully');
                emailSuccess = true;
            } catch (emailError) {
                console.error('Failed to send notification email:', emailError);
            }
        } else {
            console.warn('Email credentials missing. Skipping email.');
        }

        if (dbSuccess || emailSuccess) {
            return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Failed to process inquiry (both DB and Email failed)' }, { status: 500 });
        }
    } catch (error) {
        console.error('Unexpected Global Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
