
export default function Home() {
  	return (
		<div className="font-sans">
			
			{/* header */}
			<div className="flex mx-2 mt-4 md:w-5/6 sm:mx-auto">
				<div className="flex items-end font-thin">
					<img src="/logo.svg" alt="logo" className="w-10 h-auto after:" />
					<sub>BookLib</sub>
				</div>
				<div className="flex flex-1 mx-4 items-center">
					<a href="#" className="mx-3 sm:mx-4 sm:px-6 sm:py-2">Features</a>
					<a href="#" className="mx-3 sm:mx-4 sm:px-6 sm:py-2">Product</a>
					<a href="#" className="mx-3 sm:mx-4 sm:px-6 sm:py-2">Contact</a>
				</div>
			</div>

			{/* body */}
			<div>

				{/* section 1 */}
				<div id="section-1">
					<div className="text-center my-24 sm:my-32 space-y-3">
						<h1 className="text-xl md:text-3xl font-dark">Books For Everyone</h1>
						<p className="text-lg md:text-2xl font-light">Books are a uniquely portable <span className="font-mono">magic</span></p>
					</div>
					<div id="wave-1" className="relative">
						<img src="/wave 1.svg" alt="wave" className="w-full h-auto" />
						<img src="/big book.svg" alt="book" className="absolute -top-3 md:-top-5 right-8 sm:right-16 md:right-28 lg:right-36 h-auto w-28 sm:36 md:w-44 lg:w-64" />
						<div id="primary-btns" className="flex items-center justify-center h-64 md:h-96 bg-[#0099FE]">
							<div className="flex justify-between content-center w-5/6 mx-auto space-x-2 text-sm md:text-lg">
								<button className="bg-[#FF8B20] px-3 sm:px-6 py-2 rounded-sm">PDF</button>
								<button className="bg-[#8EFD00] px-3 sm:px-6 rounded-sm">EPUB</button>
								<button className="bg-[#28D8FF] px-3 sm:px-6 rounded-sm">AZW</button>
								<button className="bg-[#FF20C1] px-3 sm:px-6 rounded-sm">MOBI</button>
							</div>
						</div>
					</div>
				</div>

				{/* section 2 */}
				<div id="section-2" className="space-y-24 my-24">
					<div id="two-1" className="text-center px-1">
						<h1 className="text-xl sm:text-3xl font-bolder">See What others reading</h1>
						<p className="text-md font-light  sm:text-xl">Choose what you like to read from 10,000s of our collection</p>
					</div>
					<div id="two-2" className="flex mx-2 space-x-2">
						<div id="two-two-1" className="flex-1 flex justify-center items-center">
							<ul className="text-sm md:text-md">
								<li className="p-2">Free to read.</li>
								<li className="p-2">Bookmark feature available.</li>
								<li className="p-2">Create your own gallery.</li>
							</ul>
						</div>
						<div id="two-two-2" className="flex-1 flex justify-center items-center">
							<ul className="text-sm md:text-md sm:w-72 p-1 space-y-1 border border-black rounded-sm">
								<li className="flex md:py-3 md:px-2 items-center bg-[#DEDEDE] rounded-sm"><img src="read.png" alt="read books" className="w-8 h-auto mr-2"/><p> Read what your heart desire</p></li>
								<li className="flex md:py-3 md:px-2 items-center bg-[#DEDEDE] rounded-sm"><img src="bookmark icon.png" alt="read books" className="w-8 h-8 mr-2"/><p>continue from the bookmark</p></li>
								<li className="flex md:py-3 md:px-2 items-center bg-[#DEDEDE] rounded-sm"><img src="save.png" alt="read books" className="w-8 h-auto mr-2"/><p>save books in gallery</p></li>
							</ul>
						</div>
					</div>
					<div id="two-3" className="text-center my-24 space-y-24 px-1">
						<div>
							<h1 className="text-xl sm:text-3xl font-bolder">Save to Gallery</h1>
							<p className="text-md font-light">create your gallery and drop your awesome books</p>
						</div>
						<div className="sm:w-5/6 mx-auto p-2 sm:p-4 md:p-8 bg-[#0FB6FE] lg:flex space-y-2 ">
							<div id="two-three-1" className="space-y-2 lg:mt-16 sm:mr-8 lg:mr-0">
								<div id="book" className="flex text-left">
									<img src="boook.png" alt="red book" className="w-16 h-16 lg:w-24 lg:h-auto" />
									<div className="text-sm">
										<h1 className="font-bold">How these students work</h1>
										<p className="text-light">
											This is a book where it is showed
											that how C students are smatter than A student
										</p>
										<p className="font-thin">By Nikhil Kumar Swain</p>
									</div>
								</div>
								<div id="book" className="flex text-left">
								<img src="boook.png" alt="red book" className="w-16 h-16 lg:w-24 lg:h-auto" />
									<div className="text-sm">
										<h1 className="font-bold">How these students work</h1>
										<p className="text-light">
											This is a book where it is showed
											that how C students are smatter than A student
										</p>
										<p className="font-thin">By Nikhil Kumar Swain</p>
									</div>
								</div>
							</div>
							<div id="two-three-2" className="space-y-2 sm:ml-8 lg:ml-0">
								<div id="book" className="flex text-left">
								<img src="boook.png" alt="red book" className="w-16 h-16 lg:w-24 lg:h-auto" />
									<div className="text-sm">
										<h1 className="font-bold">How these students work</h1>
										<p className="text-light">
											This is a book where it is showed
											that how C students are smatter than A student
										</p>
										<p className="font-thin">By Nikhil Kumar Swain</p>
									</div>
								</div>
								<div id="book" className="flex text-left">
								<img src="boook.png" alt="red book" className="w-16 h-16 lg:w-24 lg:h-auto" />
									<div className="text-sm">
										<h1 className="font-bold">How these students work</h1>
										<p className="text-light">
											This is a book where it is showed
											that how C students are smatter than A student
										</p>
										<p className="font-thin">By Nikhil Kumar Swain</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="four" className="absolute">
						<div id="four-1" className="text-center space-y-16 py-16 px-1 text-white bg-[#494949]">
							<h1 className="text-xl sm:text-3xl font-semibold">Start Reading Right Now</h1>
							<div className="flex justify-evenly items-center font-light sm:text-lg">
								<p>Free Books</p>
								<p>⚪️</p>
								<p>Download Available</p>
								<p>⚪️</p>
								<p>Read Forever</p>
							</div>
							<div className="flex justify-center items-center">
								<button className="bg-[#0FB6FE] text-black font-extralight rounded-sm px-4 py-2">Create Free Account</button>
							</div>
						</div>
						<div id="four-2" className="mt-16">
							<img src="wave 2.svg" alt="wave" />
							<div className="bg-[#006AB1] pb-8 px-2 sm:px-6 text-white space-y-16">
								<div className="flex justify-between">
									<h1 className="text-lg sm:text-3xl font-semibold">
										copywrite @ {new Date().getFullYear()}
									</h1>
									<div className="flex space-x-2">
										<a href="#social"><img src="facebook.svg" alt="social" className="w-6 md:w-12 h-6 md:h-12" /></a>
										<a href="#social"><img src="twitter.svg" alt="social"  className="w-6 md:w-12 h-6 md:h-12" /></a>
										<a href="#social"><img src="linkedin.svg" alt="social" className="w-6 md:w-12 h-6 md:h-12" /></a>
									</div>
								</div>
								<div>
									<p>Designed by <a  className="text-purple-400" href="https://twitter.com/iamn1khil">Nikhil Kumar Swain</a> with ❤️</p>
									<p>Developed by <a className="text-purple-400" href="https://twitter.com/karansh491">Karan Sharma</a> with 🔥</p>
									<div className="flex space-x-8 text-sm font-thin mt-8">
										<p>Website Terms</p>
										<p>Privacy Policy</p>
										<p>Terms Of Services</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>



		</div>
  	)
}
