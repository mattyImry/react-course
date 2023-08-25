import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
    const data = useLoaderData();
    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }
    const events = data.events;
    return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
    const response = await fetch("http://localhost:8080/eventsd");

    if (!response.ok) {
        // return { isError: true, message: "Could not fetch data" };
        // throw new Response(JSON.stringify({ message: "Could not fecth event" }), {
        //     status: 500,
        // });
        return json(
            { message: "Could not fecth event" },
            {
                status: 500,
            }
        );
    } else {
        return response;
    }
}
