import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../lib/prisma';

export async function POST(req: Request): Promise<NextResponse> {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        const newData = await prisma.contactForm.create({
            data: { name, email, message }
        });
        return NextResponse.json(
            {
                newData
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                error: "Internal Server Error"
            },
            { status: 500 }
        )
    }
}