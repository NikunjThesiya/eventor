import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

function EventDetailContent({
	title,
	date,
	address,
	image,
	description,
	landmark,
}) {
	return (
		<div className="bg-gradient-to-r from-purple-400 to-purple-600 flex flex-col items-center justify-center">
			<div className="w-full flex bg-gradient-to-r from-purple-400 to-purple-600 py-5 px-5 justify-center">
				<h1 className="text-2xl md:text-4xl text-white font-bold py-3 px-4">
					{title}
				</h1>
			</div>
			<div className="flex flex-col items-center space-y-8 my-4 bg-white w-11/12 md:w-2/3 rounded-3xl px-6 mx-6 md:px-10 py-8 md:py-10 border border-transparent shadow-2xl hover:border-purple-300 transition-all duration-200 ease-in-out">
				<div className="w-full h-60 md:h-96 md:shadow-xl overflow-hidden object-cover rounded-2xl md:rounded-3xl">
					<img
						src={"/" + image}
						alt={title}
						className="w-full h-full object-cover object-center"
					/>
				</div>

				<div className="w-full flex flex-col space-y-4 md:space-y-0 md:flex-row items-start justify-between">
					<div className="flex space-x-4">
						<div className="text-base bg-purple-100 p-2 text-purple-500 rounded-lg">
							<HiOutlineCalendar />
						</div>
						<div className="font-medium text-xs bg-purple-100 text-purple-500 rounded-md px-3 py-2 self-start">
							<time>{date}</time>
						</div>
					</div>
					<div className="flex items-start space-x-4 text-sm">
						<div className="text-base bg-purple-100 p-2 text-purple-500 rounded-lg">
							<HiOutlineLocationMarker />
						</div>

						<div className="text-gray-700">
							<address>{address}</address>
							<address>{landmark}</address>
						</div>
					</div>
				</div>
				<div className="w-full text-justify text-gray-700">
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default EventDetailContent;
