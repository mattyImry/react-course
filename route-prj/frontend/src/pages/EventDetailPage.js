import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();
    return (
        <>
            <h1>Events Details</h1>
            <p>Event Details: Id {params.eventId}</p>
        </>
    );
}

export default EventDetailPage;
