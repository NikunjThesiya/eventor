import EventList from "../../components/events/EventList";
import { useRouter } from "next/router";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

function AllEvents() {
	const events = getAllEvents();
	const router = useRouter();
	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};
	return (
		<div className="bg-gray-100 w-full flex flex-col items-center py-10">
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</div>
	);
}

export default AllEvents;
