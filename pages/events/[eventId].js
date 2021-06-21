import { useRouter } from "next/router";
import EventDetailContent from "../../components/event-detail/EventDetailContent";
import { getEventById } from "../../dummy-data";

function EventDetail() {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	return (
		<>
			<EventDetailContent
				title={event?.title}
				date={event?.date}
				address={event?.location}
				landmark={event?.landmark}
				image={event?.image}
				description={event?.description}
			/>
		</>
	);
}

export default EventDetail;
