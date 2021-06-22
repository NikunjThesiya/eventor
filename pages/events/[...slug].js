import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/events/resultsTitle";
import EventList from "../../components/events/EventList";

function FilteredEventsPage() {
	const router = useRouter();
	const filterData = router.query.slug;
	if (!filterData) {
		return <p>Loading</p>;
	}
	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2021 ||
		numMonth < 1 ||
		numMonth > 12
	) {
		return (
			<div className="w-full h-screen flex flex-col items-center justify-center space-y-5">
				<p className="text-2xl md:text-5xl font-bold text-purple-500 text-center">
					Invalid Filters. Please adjust your values
				</p>
				<button className="btn" onClick={() => router.push("/events")}>
					Show all events
				</button>
			</div>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<div className="w-full h-screen flex flex-col items-center justify-center space-y-5">
				<p className="text-2xl md:text-5xl font-bold text-purple-500 text-center">
					No Events Found For Chosen Filters!
				</p>
				<button className="btn" onClick={() => router.push("/events")}>
					Show all events
				</button>
			</div>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<div className="bg-gray-100">
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</div>
	);
}

export default FilteredEventsPage;
