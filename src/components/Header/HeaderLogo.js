import Link from "next/link";

export default function HeaderLogo() {
	return (
		<Link href="#">
			<a className="container items-center px-4 w-max text-4xl lg:text-5xl font-flower">
				<span className="text-white-400 ">
				OCTO</span>
				
				<span className="text-white-400 ">
					LAB
				</span>
			</a>
		</Link>
	);
}
