import { BiChevronDown } from "react-icons/bi";

function EventSearch() {
	return (
		<form className="w-4/5">
			<div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between bg-white py-6 px-10 rounded-3xl">
				<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5">
					<div className="flex space-x-4 items-center text-sm md:text-base">
						<label htmlFor="year">Year</label>
						<div className="relative flex space-x-3 bg-purple-100 rounded-xl pr-3 ">
							<select
								id="year"
								className="bg-transparent focus:outline-none px-3 py-3 w-full text-xs md:text-base"
							>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
							</select>
						</div>
					</div>
					<div className="flex space-x-4 items-center text-sm md:text-base">
						<label htmlFor="month">Month</label>
						<div className="relative flex space-x-3 bg-purple-100 rounded-xl pr-3">
							<select
								id="month"
								className="bg-transparent focus:outline-none px-3 py-3 w-full text-xs md:text-base"
							>
								<option value="1">January</option>
								<option value="2">February</option>
								<option value="3">March</option>
								<option value="4">April</option>
								<option value="5">May</option>
								<option value="6">June</option>
								<option value="7">July</option>
								<option value="8">August</option>
								<option value="9">September</option>
								<option value="10">October</option>
								<option value="11">November</option>
								<option value="12">December</option>
							</select>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="btn focus:outline-none self-start md:self-auto"
				>
					Find Events
				</button>
			</div>
		</form>
	);
}

export default EventSearch;
