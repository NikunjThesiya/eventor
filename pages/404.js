import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

export default function Custom404() {
	return (
		<div
			className="w-full h-screen flex flex-col space-y-5 items-center justify-center bg-gradient-to-r from-purple-400 to-purple-600"
			onClick={() => router.push("/")}
		>
			<h1 className="text-3xl md:text-5xl font-bold text-white">
				Page Not Found!
			</h1>
			<span className="flex space-x-4 items-center btnWhite">
				<BsArrowLeft />
				<span>Go To Home</span>
			</span>
		</div>
	);
}
