import { Clock, MapPin, Video, Calendar, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

export const AppointmentCard = ({ event }: { event: Event }) => {
    const getLocationIcon = () => {
        const location = event.locations[0];
        if (location.kind === 'google_conference') {
            return <Video className="w-4 h-4" />;
        }
        return <MapPin className="w-4 h-4" />;
    };

    const getLocationText = () => {
        const location = event.locations[0];
        if (location.kind === 'google_conference') {
            return 'Google Meet';
        }
        return location.kind;
    };

    return (
        <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 ${event.active ? 'border-green-500' : 'border-gray-300'}`}>
            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                            {event.name}
                        </h3>
                        <p className="text-sm text-gray-500">{event.profile.name}</p>
                    </div>
                    <div className="ml-4">
                        {event.active ? (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Active
                            </span>
                        ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                <XCircle className="w-3 h-3 mr-1" />
                                Inactive
                            </span>
                        )}
                    </div>
                </div>

                <div className="space-y-3 mb-5">
                    <div className="flex items-center text-gray-700">
                        <Clock className="w-4 h-4 mr-3 text-gray-400" />
                        <span className="text-sm">{event.duration} minutes</span>
                    </div>

                    <div className="flex items-start text-gray-700">
                        {getLocationIcon()}
                        <span className="text-sm ml-3">{getLocationText()}</span>
                    </div>

                    <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                        <span className="text-sm capitalize">{event.booking_method} booking</span>
                    </div>
                </div>

                {event.active && (
                    <a
                        href={event.scheduling_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Schedule Appointment
                    </a>
                )}
            </div>
        </div>
    );
};