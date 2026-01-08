import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, phone, inquiryType, eventDate, message } = await request.json();

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

        return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: 'Failed to submit inquiry' }, { status: 500 });
    }
}
