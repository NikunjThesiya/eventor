import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

function EventItem({ title, image, date, location, landmark, id }) {
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const exploreLink = `/events/${id}`;

	return (
		<div className="flex flex-col lg:flex-row items-start lg:items-center space-y-5 lg:space-y-0 justify-between my-4 bg-white w-full md:w-2/3 rounded-3xl px-6 md:px-10 py-8 md:py-8 border border-transparent hover:shadow-lg hover:border-purple-300 transition-all duration-200 ease-in-out">
			<div className="lg:w-2/5 lg:h-60 xl:w-2/5 xl:h-72 md:shadow-xl overflow-hidden object-cover rounded-2xl md:rounded-3xl">
				<img
					src={"/" + image}
					alt={title}
					className="w-full h-full object-cover object-center"
				/>
			</div>
			<div className="lg:w-2/4 flex flex-col space-y-5 text-gray-700">
				<div className="flex flex-col space-y-2">
					<h2 className="text-xl md:text-2xl font-bold line-clamp-2">
						{title}
					</h2>
					<div className="flex space-x-4">
						<div className="text-base bg-purple-100 p-2 text-purple-500 rounded-lg">
							<HiOutlineCalendar />
						</div>
						<div className="font-medium text-xs bg-purple-100 text-purple-500 rounded-md px-3 py-2 self-start">
							<time>{humanReadableDate}</time>
						</div>
					</div>
					<div className="flex items-start space-x-4 text-sm">
						<div className="text-base bg-purple-100 p-2 text-purple-500 rounded-lg">
							<HiOutlineLocationMarker />
						</div>

						<div>
							<address>{location}</address>
							<address>{landmark}</address>
						</div>
					</div>
				</div>
				<div className="btn flex space-x-2 md:space-x-4 items-center justify-center justify-self-start self-start shadow-xl">
					<Link href={exploreLink}>Explore Event</Link>
					<BsArrowRight className="text-lg md:text-xl" />
				</div>
			</div>
		</div>
	);
}

export default EventItem;
