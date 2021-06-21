import EventItem from "./EventItem";

function EventList({ items }) {
	return (
		<div className="w-full flex flex-col items-center px-10 lg:px-8 py-8">
			{items.map((event) => (
				<EventItem
					key={event.key}
					id={event.id}
					title={event.title}
					location={event.location}
					landmark={event.landmark}
					date={event.date}
					image={event.image}
				/>
			))}
		</div>
	);
}

export default EventList;
