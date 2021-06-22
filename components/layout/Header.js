import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
	const router = useRouter();
	return (
		<header className="z-50 w-full px-8 py-4 flex items-center justify-between bg-gradient-to-r from-purple-400 to-purple-600 sticky top-0 shadow-xl">
			<div className="logo text-2xl md:text-3xl text-white">
				<Link href="/">Eventor</Link>
			</div>
			<span onClick={() => router.push("/events")} className="btnWhite">
				<span>Browse All Events</span>
			</span>
		</header>
	);
}

export default Header;
