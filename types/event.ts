
interface EventsProps {
    collection: [Event]
}

interface Event {
    active: string;
    booking_method: string;
    duration: string;
    locations: [{
        kind: string;
    }];
    name: string;
    profile: {
        name: string;
    },
    scheduling_url: string;
}