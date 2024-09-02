
const Shimmer = ()=> {
    return (
        <div className="flex flex-wrap justify-evenly -z-20">
			{Array(20)
				.fill("")
				.map((_, index) => (
					<div
						key={index}
						className="p-4 border-2 my-5 shadow-md rounded-xl animate-pulse">
						<div className="bg-gray-300 w-60 h-48 rounded-xl mb-4"></div>
						<div className="w-60">
							<div className="bg-gray-300 h-6 mb-2 rounded"></div>
							<div className="bg-gray-300 h-6 mb-2 rounded"></div>
							<div className="bg-gray-300 h-6 mb-2 rounded"></div>
							<div className="bg-gray-300 h-6 rounded"></div>
						</div>
					</div>
				))}
		</div>

    )

}

export default Shimmer