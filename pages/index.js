import Head from "next/head";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function Home() {
	const featuredEvents = getFeaturedEvents();
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Eventor</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<EventList items={featuredEvents} />
			</div>
		</div>
	);
}
