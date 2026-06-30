import eventsData from "../events.json";

const getEvents = async () => {
    const events = eventsData.events.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    return events;
}

export default getEvents;