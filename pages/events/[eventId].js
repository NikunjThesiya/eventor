import { useRouter } from "next/router";
import EventDetailContent from "../../components/event-detail/EventDetailContent";
import { BsArrowLeft } from "react-icons/bs";
import { getEventById } from "../../dummy-data";

function EventDetail() {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	return (
		<>
			{event ? (
				<EventDetailContent
					title={event?.title}
					date={event?.date}
					address={event?.location}
					landmark={event?.landmark}
					image={event?.image}
					description={event?.description}
				/>
			) : (
				<div
					className="w-full h-screen flex flex-col space-y-5 items-center justify-center bg-gradient-to-r from-purple-400 to-purple-600"
					onClick={() => router.push("/")}
				>
					<h1 className="text-3xl md:text-5xl font-bold text-white">
						Event Not Found!
					</h1>
					<span className="flex space-x-4 items-center btnWhite">
						<BsArrowLeft />
						<span>Go To Home</span>
					</span>
				</div>
			)}
		</>
	);
}

export default EventDetail;
