import { useState } from "react";
import Link from "next/link";

import FAQTitle from "../components/FAQ/FAQTitle";

export default function FAQ() {
	const [faq1, setFaq1] = useState(false);
	const [faq2, setFaq2] = useState(false);
	const [faq3, setFaq3] = useState(false);
	const [faq4, setFaq4] = useState(false);
	const [faq5, setFaq5] = useState(false);
	const [faq6, setFaq6] = useState(false);
	const [faq7, setFaq7] = useState(false);

	return (
		<div id="faq ">
			<div className="z-20 flex flex-col items-center justify-center px-6 pb-20 sm:px-0">
				<FAQTitle />
				<div className="flex flex-col w-full gap-8 lg:w-1/2 md:w-8/12 sm:w-9/12">
					<div className="p-8 bg-gray-100 rounded shadow">
						<div className="flex items-center justify-between">
							<div>
								<h2
									onClick={() => setFaq1(!faq1)}
									className="font-bold leading-none text-gray-800 uppercase cursor-pointer font-flower lg:text-4xl text-2xl"
								>
									Who is behind TestRinkebyOcto?
								</h2>
							</div>
							<button
								onClick={() => setFaq1(!faq1)}
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
							>
								{faq1 ? (
									<svg
										role="button"
										aria-label="close dropdown"
										width="20"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 5L5 1L9 5"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg
										width="20"
										role="button"
										aria-label="open dropdown"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L5 5L9 1"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						</div>

						{faq1 && (
							<ul className="">
								<li>
									<p className="mt-4 lg:text-2xl text-xl leading-normal text-justify text-gray-600 font-flower">
										<Link href="https://twitter.com/spiridono">
											<a className="font-flower text-blue-600 hover:text-cyan-700">
												octocity.eth
											</a>
										</Link>
										{" "}- founder, dev and artist. Long term crypto enthusiast, self-proclaimed blockchain
										developer, dad, cat lover, degen.

									</p>
								</li>
							</ul>
						)}
					</div>


					<div className="p-8 bg-gray-100 rounded shadow">
						<div className="flex items-center justify-between">
							<div>
								<h2
									onClick={() => setFaq2(!faq2)}
									className="font-bold leading-none text-gray-800 uppercase cursor-pointer font-flower lg:text-4xl text-2xl"
								>
									ROADMAP?
								</h2>
							</div>
							<button
								onClick={() => setFaq2(!faq2)}
								data-menu
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
							>
								{faq3 ? (
									<svg
										role="button"
										aria-label="close dropdown"
										width="20"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 5L5 1L9 5"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg
										width="20"
										role="button"
										aria-label="open dropdown"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L5 5L9 1"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						</div>
						{faq2 && (
							<ul>
								<li>
									<p className="mt-4 lg:text-2xl text-xl leading-normal text-justify text-gray-600 font-flower ">
										OctoLab were created as a nice little gift to the awesome community of CryptoBatz and CoolCats, and didn&apos;t promise anything but positive vibes at the start. {""}

										<p>&nbsp;</p>
										After a successful launch, it was clear that the community wants the RandoMcie to have a long term future, so we gathered a team of 
										awesome and creative people to take the project to a different level.
										  <p>&nbsp;</p>
										  Stay tuned for the announcements!
										  									    
									</p>
								</li>
							</ul>
						)}
					</div>


					<div className="p-8 bg-gray-100 rounded shadow">
						<div className="flex items-center justify-between">
							<div>
								<h2
									onClick={() => setFaq3(!faq3)}
									className="font-bold leading-none text-gray-800 uppercase cursor-pointer font-flower lg:text-4xl text-2xl"
								>
									How were the OctoLab created?
								</h2>
							</div>
							<button
								onClick={() => setFaq3(!faq3)}
								data-menu
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
							>
								{faq3 ? (
									<svg
										role="button"
										aria-label="close dropdown"
										width="20"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 5L5 1L9 5"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg
										width="20"
										role="button"
										aria-label="open dropdown"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L5 5L9 1"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						</div>
						{faq3 && (
							<ul>
								<li>
									<p className="mt-4 lg:text-2xl text-xl leading-normal text-justify text-gray-600 font-flower ">
										OctoLab were hand drawn and coded by {""}
										<Link href="https://twitter.com/spiridono">
											<a className="font-flower text-blue-600 hover:text-cyan-700">
												octocity.eth
											</a>
										</Link>.
										  <p>&nbsp;</p>
										  All the separate parts were ran through a custom Python script that randomly combined them based on each part&apos;s rarity profile.
										  <p>&nbsp;</p>
										  Resulting images and metadata were uploaded to a decentralized file system (IPFS) and linked to OctoLab smart contract.  
									</p>
								</li>
							</ul>
						)}
					</div>

					<div className="p-8 bg-gray-100 rounded shadow">
						<div className="flex items-center justify-between">
							<div>
								<h2
									onClick={() => setFaq4(!faq4)}
									className="font-bold leading-none text-gray-800 uppercase cursor-pointer font-flower lg:text-4xl text-2xl"
								>
									Tokenomics?
								</h2>
							</div>
							<button
								onClick={() => setFaq4(!faq4)}
								data-menu
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
							>
								{faq4 ? (
									<svg
										role="button"
										aria-label="close dropdown"
										width="20"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 5L5 1L9 5"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg
										width="20"
										role="button"
										aria-label="open dropdown"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L5 5L9 1"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						</div>
						{faq4 && (
							<ul>
								<li>
									<p className="mt-4 lg:text-2xl text-xl leading-normal text-left text-gray-600 font-flower ">
										🐙 <a className="font-semibold text-blue-600">Maximum supply:</a> 3000.
										<p>&nbsp;</p>
										🐙 <a className="font-semibold text-blue-600">White list:</a> OctoLab are FREE to mint for owners of CryptoBatz, and CoolCats, max 1 per address.
										Your qualifying token must be in your wallet in order to claim a free OctoLab.
										<p>&nbsp;</p>
										🐙 <a className="font-semibold text-blue-600">Public sale:</a> Publicly available OctoLab cost 0.025 ETH, max 7 per transaction.
										<p>&nbsp;</p>
										All prices are excluding gas fee.
										<p>&nbsp;</p>
									</p>
								</li>
							</ul>
						)}
					</div>


					<div className="p-8 bg-gray-100 rounded shadow">
						<div className="flex items-center justify-between">
							<div>
								<h2
									onClick={() => setFaq5(!faq5)}
									className="font-bold leading-none text-gray-800 uppercase cursor-pointer font-flower lg:text-4xl text-2xl"
								>
									How can I get an TestRinkebyOcto?
								</h2>
							</div>
							<button
								onClick={() => {
									setFaq5(!faq5);
								}}
								data-menu
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
							>
								{faq5 ? (
									<svg
										role="button"
										aria-label="close dropdown"
										width="20"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 5L5 1L9 5"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg
										width="20"
										role="button"
										aria-label="open dropdown"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L5 5L9 1"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						</div>
						{faq5 && (
							<ul>
								<li>
									<p className="mt-4 lg:text-2xl text-xl leading-normal text-justify text-gray-600 font-flower ">
										You will need an Ethereum wallet like{" "}
										<Link href="https://metamask.io">
											<a className="font-flower text-blue-600 hover:text-cyan-700">
												MetaMask
											</a>
										</Link>{" "}
										with some ETH on it. Then you use this website as long as
										supply lasts.
									</p>
								</li>
							</ul>
						)}
					</div>

					<div className="p-8 bg-gray-100 rounded shadow">
						<div className="flex items-center justify-between">
							<div>
								<h2
									onClick={() => setFaq6(!faq6)}
									className="font-bold leading-none text-gray-800 uppercase cursor-pointer font-flower lg:text-4xl text-2xl"
								>
									Are OctoLab a good investment?
								</h2>
							</div>
							<button
								onClick={() => {
									setFaq6(!faq6);
								}}
								data-menu
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
							>
								{faq6 ? (
									<svg
										role="button"
										aria-label="close dropdown"
										width="20"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 5L5 1L9 5"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg
										width="20"
										role="button"
										aria-label="open dropdown"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L5 5L9 1"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						</div>
						{faq6 && (
							<ul>
								<li>
									<p className="mt-4 lg:text-2xl text-xl leading-normal text-justify text-gray-600 font-flower ">
										OctoLab were created as a fun collection catering to awesome NFT community of CryptoBatz, CoolCats and are
										intended for people to enjoy collecting, not as a financial
										instrument. The creator makes absolutely no promises or
										guarantees regarding the value of the RandoMice. Hopefully
										OctoLab go to the moon, but like anything in life, don&apos;t
										spend money you can&apos;t afford to not have.
									</p>
								</li>
							</ul>
						)}
					</div>

					<div className="p-8 bg-gray-100 rounded shadow">
						<div className="flex items-center justify-between">
							<div>
								<h2
									onClick={() => setFaq7(!faq7)}
									className="font-bold leading-none text-gray-800 uppercase cursor-pointer font-flower lg:text-4xl text-2xl"
								>
									How are OctoLab licensed?
								</h2>
							</div>
							<button
								onClick={() => setFaq7(!faq7)}
								data-menu
								className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white"
							>
								{faq7 ? (
									<svg
										role="button"
										aria-label="close dropdown"
										width="20"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 5L5 1L9 5"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								) : (
									<svg
										width="20"
										role="button"
										aria-label="open dropdown"
										height="20"
										viewBox="0 0 10 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1 1L5 5L9 1"
											stroke="#4B5563"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								)}
							</button>
						</div>
						{faq7 && (
							<ul>
								<li>
									<p className="mt-4 lg:text-2xl text-xl leading-normal text-justify text-gray-600 font-flower ">
										OctoLab, the contract code, and resulting assets are all
										Public domain, you are free to do whatever you want with
										your RandoMice.
									</p>
								</li>
							</ul>
						)}
					</div>
					
				</div>
			</div>
		</div>
	);
}
