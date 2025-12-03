import { NextRequest, NextResponse } from "next/server";

const URL = process.env.CALENDLY_BASE_URL;
const USER_URI = encodeURIComponent(process.env.CALENDLY_URI!);

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const res = await fetch(`${URL}/event_types?user=${USER_URI}`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${process.env.CALENDLY_ACCESS_TOKEN}` }
        });

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json({ data }, { status: 422 });
        }

        return NextResponse.json(data, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: err instanceof Error ? err.message : "Something went wrong" }, { status: 500 });
    }
}