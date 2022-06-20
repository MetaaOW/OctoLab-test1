export default function HeroClaimButton({ claimTestRinkebyOcto }) {
	return (
		<button
			className="px-4 py-2 mt-2 mb-6 text-center text-4xl text-white uppercase bg-blue-600 rounded font-flower hover:bg-blue-400 hover:border-blue-500"
			onClick={claimTestRinkebyOcto}
		>
			{"CLAIM ONE FOR FREE!"}
		</button>
	);
}
