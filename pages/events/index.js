import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function AllEvents() {
	const events = getAllEvents();
	return (
		<div className="bg-gray-100 w-full flex flex-col items-center py-10">
			<EventSearch />
			<EventList items={events} />
		</div>
	);
}

export default AllEvents;
