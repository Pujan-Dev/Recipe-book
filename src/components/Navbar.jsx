import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
	return (
		<div className="bg-gray-900 p-4">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<Link to="/" className="text-3xl font-bold text-white">
					Recipe-Site
				</Link>
				<div className="flex space-x-6 text-xl font-medium text-white">
					<Link
						className="px-6 py-2 rounded-lg hover:bg-sky-600 transition-all"
						to="/"
					>
						Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
