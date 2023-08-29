import EventForm from "../components/EventForm";

function NewEventPage() {
    return <EventForm />;
}

export default NewEventPage;

export async function action() {
    fetch("http://localhost:8080/events", {
        method: "POST",
        body:
    });
}
