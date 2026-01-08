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

        // 2. Email Notification to Admin (Reliable fallback for Google Voice/Carriers)
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
                    from: `"Website Bot" <${process.env.GMAIL_USER}>`,
                    to: process.env.GMAIL_USER, // Send to yourself
                    subject: `✨ New Inquiry: ${name}`,
                    html: `
                        <h2>New Website Inquiry</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Type:</strong> ${inquiryType}</p>
                        <p><strong>Date:</strong> ${eventDate}</p>
                        <br/>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    `,
                };

                await transporter.sendMail(mailOptions);
                console.log('Admin notification sent successfully');
            } catch (emailError) {
                console.error('Failed to send Admin notification:', emailError);
            }
        }

        return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
    }
}
