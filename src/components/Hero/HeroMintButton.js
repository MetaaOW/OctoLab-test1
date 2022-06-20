export default function HeroMintButton({ mintTestRinkebyOcto }) {
	return (
		<button
			className="px-4 py-2 mt-2 mb-6 text-center text-4xl text-white uppercase bg-blue-500 rounded font-flower hover:bg-red-500 hover:border-blue-500"
			onClick={mintTestRinkebyOcto}
		>
			{"MINT NOW!"}
		</button>
	);
}

