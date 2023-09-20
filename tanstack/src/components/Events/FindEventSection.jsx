import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { fetchEvents } from "../../util/http.js";

export default function FindEventSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const searchElement = useRef();

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["events", { search: searchTerm }],
        queryFn: () => fetchEvents(searchTerm),
    });

    function handleSubmit(event) {
        event.preventDefault();
        setSearchTerm(searchElement.current.value);
    }

    let 

    return (
        <section className="content-section" id="all-events-section">
            <header>
                <h2>Find your next event!</h2>
                <form onSubmit={handleSubmit} id="search-form">
                    <input
                        type="search"
                        placeholder="Search events"
                        ref={searchElement}
                    />
                    <button>Search</button>
                </form>
            </header>
            <p>Please enter a search term and to find events.</p>
        </section>
    );
}
