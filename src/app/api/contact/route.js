import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, inquiryType, eventDate, message } = await request.json();

        // 1. Database Operations
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

        // 2. SMS Notification via Email (Nodemailer)
        // Only run if environment variables are present
        if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_PASS,
                    },
                });

                const mailOptions = {
                    from: process.env.GMAIL_USER,
                    to: '4127373376@tmomail.net',
                    subject: `New Inquiry: ${name}`,
                    text: `New ${inquiryType} Inquiry!\n\nName: ${name}\nDate: ${eventDate}\nPhone: ${phone}\nMsg: ${message.substring(0, 50)}...`,
                };

                await transporter.sendMail(mailOptions);
                console.log('SMS Notification sent successfully');
            } catch (emailError) {
                console.error('Failed to send SMS notification:', emailError);
                // Do not throw here; we still want to return success for the DB save
            }
        }

        return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
    }
}
