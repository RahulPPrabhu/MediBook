import { NextRequest, NextResponse } from "next/server";

interface ParamsType {
    slug: string;
}

const URL = process.env.CALENDLY_BASE_URL;
const USER_URI = encodeURIComponent(process.env.CALENDLY_URI!);

export async function GET(req: NextRequest) {
    const eventType = req.nextUrl.searchParams.get("eventtype") || "";

    const res = await fetch(`${URL}/event_types?user=${USER_URI}`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${process.env.CALENDLY_ACCESS_TOKEN}` }
    });

    const data = await res.json();

    const event = data?.collection?.find((d: Event) => d.name === eventType);
    const eventURI = event.uri;
    const meetingDuration = event.duration;
    const bookingUrl = event.scheduling_url;

    const slots = await fetch(`${URL}/event_type_availability_schedules?event_type=${encodeURIComponent(eventURI)}`, {
        headers: { "Authorization": `Bearer ${process.env.CALENDLY_ACCESS_TOKEN}` }
    });

    const slotResult = await slots.json();

    const result = {
        slots: slotResult.collection,
        meetingDuration: meetingDuration,
        schedulingUrl: bookingUrl
    }

    return NextResponse.json(result, { status: 200 });
}