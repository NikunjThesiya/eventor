import { useRouter } from "next/router";

function ResultsTitle(props) {
	const { date } = props;

	const router = useRouter();

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	return (
		<section className="w-full flex flex-col space-y-4 pt-8 items-center">
			<h1 className="text-2xl md:text-4xl font-semibold text-gray-500">
				Events in {humanReadableDate}
			</h1>
			<button className="btn" onClick={() => router.push("/events")}>
				Show all events
			</button>
		</section>
	);
}

export default ResultsTitle;
