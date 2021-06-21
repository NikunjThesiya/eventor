import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

function AllEvents() {
	const events = getAllEvents();
	return (
		<div className="bg-gray-100">
			<EventList items={events} />
		</div>
	);
}

export default AllEvents;
