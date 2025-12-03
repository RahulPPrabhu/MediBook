import { AppointmentCard } from "./AppointmentCard";

const AppointmentCards = ({ data: { collection } }: { data: EventsProps }) => {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 mt-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Available Appointments
                    </h1>
                    <p className="text-gray-600">
                        Book your appointment with Dr. Smith
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {collection?.map((event, index) => (
                        <AppointmentCard key={index} event={event} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppointmentCards;