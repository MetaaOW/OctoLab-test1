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
									Who is behind OctoLab?
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
										<Link href="https://twitter.com/OctoCityNFT">
											<a className="font-flower text-blue-600 hover:text-cyan-700">
												octocity.eth
											</a>
										</Link>
										{" "}- founder and co-artist, future father who wants to gain a foothold in this world.

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
									A NEW TYPE OF ROADMAP?
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
									GoblinTown brought a free mint to the community, we want to bring honesty to the community. {""}
									<p>&nbsp;</p>
										OctoLab were created as a nice little gift to the awesome community, and didn&apos;t promise anything but positive 
										vibes at the start. {""}

										<p>&nbsp;</p>
										For starters, my wife and I have nowhere to live, and we would first take care of our corner for our baby. Our plans include constant 
										support of the project, from the nearest we make a game, without donations and lootboxes, 
										just a gift to the community, but allow for the fact that I'm alone, so it may take more time. You can always show us a new step or direct us in a new direction, we are completely open to you.
										  <p>&nbsp;</p>
										  Be sure to follow us, and let the developers do something!
										  									    
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
									Octolab were hand-drawn by my wife, and coded by me {""} <Link href="https://twitter.com/OctoCityNFT">
											<a className="font-flower text-blue-600 hover:text-cyan-700">
												octocity.eth
											</a>
										</Link>, using a custom engine.
										  <p>&nbsp;</p>

With the help of my friend {""} <Link href="https://twitter.com/spiridono">
											<a className="font-flower text-blue-600 hover:text-cyan-700">
												spiridono.eth
											</a>
										</Link>. I managed to assemble this wonderful site and add a normal, optimized smart contract
										  <p>&nbsp;</p>
He has an amazing community in discord with the good guys we're friends with and successful collections that are already changing the NFT world. 
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
										🐙 <a className="font-semibold text-blue-600">Maximum supply:</a> 3,000								
										<p>&nbsp;</p>
										🐙 <a className="font-semibold text-blue-600">Public sale:</a> Publicly available OctoLab cost 0.005 ETH, max 7 per transaction.
										<p>&nbsp;</p>
										All prices are excluding low gas fee.
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
									How can I get an OctoLab?
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
									OctoLab were created as a fun collection catering to awesome NFT community and are intended for people to enjoy collecting, not as a financial instrument. 
									I cant makes promises or guarantees regarding the value of the OctoLab. Hopefully OctoLab 
									go to the moon, but like anything in life, please, don't spend money you can't afford to not have.
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
									Ownership and commercial usage rights given to the owner, 
									so you are free to do anything with them under a non-exclusive license 
									as long as you own the OctoLab.
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
