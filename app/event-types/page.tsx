import AppointmentCards from "@/components/Events/Events";

export const dynamic = 'force-dynamic';

const API_ENDPOINT = process.env.API_ENDPOINT;

const page = async () => {
    const res = await fetch(`${API_ENDPOINT}/event`);
    const data = await res.json();

    if (!res.ok) {
        return null;
    }

    return <AppointmentCards data={data} />;
}

export default page