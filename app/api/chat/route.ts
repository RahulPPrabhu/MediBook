import { google } from '@ai-sdk/google';
import { streamText, UIMessage, convertToModelMessages, tool, stepCountIs } from 'ai';
import { get } from 'http';
import z from 'zod';

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
        model: google("gemini-2.5-flash"),
        system: `You are expert appointment booking agent. You are good at answering the users query. Use tools to answer the questions. Use tools to answer all appointment related query.

        #Instructions:
        - Greet the user
        - Use tools to query the information and summarise it to the user
        - If user asks any other query apart from the appointment bring back to the main topic rather than continuing.
        - If user wants to book appointment ask the reason for visit.
        - Categorize the reason as either General Consultation, Follow-up, Physical Exam, Special Consultation.
        - Never ask the user for the category instead categorize it using the reason.
        - Confirm the category by asking the desired time slot.
        - Once confirmed use the correct tools to fetch slots and summarize the result.
        - Ask user preference of time and upon confirmation call the get_date_tool and confirm with the date and time slot.
        - Once confirmed call the get_booking_url and return the response to the user by thanking them for their time.`,
        messages: convertToModelMessages(messages),
        tools: {
            get_available_slots: tool({
                description: 'Get all available slots',
                inputSchema: z.object({
                    eventType: z.enum(["General Consultation", "Follow-up", "Physical Exam", "Special Consultation"]).describe("Event type exactly matching any of these enum")
                }),
                execute: async ({ eventType }) => {
                    const res = await fetch(`${process.env.API_ENDPOINT}/slot?eventtype=${encodeURIComponent(eventType)}`);

                    const data = await res.json();

                    return JSON.stringify(data);
                }
            }),
            get_date_tool: tool({
                description: "Get next date that matches a weekday spoken by the user.",
                inputSchema: z.object({
                    weekday: z.enum([
                        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                    ]).describe("Confirmed day by the user")
                }),
                execute: async ({ weekday }) => {

                    const weekdayMap: Record<string, number> = {
                        Sunday: 0,
                        Monday: 1,
                        Tuesday: 2,
                        Wednesday: 3,
                        Thursday: 4,
                        Friday: 5,
                        Saturday: 6
                    };

                    const targetDay = weekdayMap[weekday];

                    const today = new Date();
                    const todayDay = today.getDay();

                    let diff = targetDay - todayDay;
                    if (diff <= 0) diff += 7;

                    const next = new Date();
                    next.setDate(today.getDate() + diff);
                    
                    const yyyy = next.getFullYear();
                    const mm = String(next.getMonth() + 1).padStart(2, "0");
                    const dd = String(next.getDate()).padStart(2, "0");

                    const formatted = `${yyyy}-${mm}-${dd}`;

                    return {
                        date: formatted,
                        weekday
                    };
                }
            }),
            get_booking_url: tool({
                description: "Generate the booking URL",
                inputSchema: z.object({
                    schedulingUrl: z.string().describe("The scheduling url for the appointment"),
                    date: z.string().describe("The date confirmed by the user"),
                    time: z.string().describe("The start time confirmed by the user")
                }),
                execute: async ({ schedulingUrl, date, time }) => {
                    const fullDateTime = `${date}T${time}`;
                    const month = date.slice(0, 7);

                    const url = `${schedulingUrl}/${fullDateTime}?month=${month}&date=${date}`;

                    return { url };
                }
            })
        },
        stopWhen: stepCountIs(5)
    });

    return result.toUIMessageStreamResponse();
}