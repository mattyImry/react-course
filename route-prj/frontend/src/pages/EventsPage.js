import { Link } from "react-router-dom";

const EVENTS = [
    { id: "1", title: "event 1" },
    { id: "2", title: "event 2" },
    { id: "3", title: "event 3" },
    { id: "4", title: "event 4" },
];

function EventPage() {
    return (
        <>
            <h1>My Event Page</h1>
            <ul>
                {EVENTS.map((event) => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default EventPage;
