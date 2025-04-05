import React from "react";
import "./food.css";

const FoodCard = ({ recipe }) => {
	// Check if the description is longer than 20 characters
	if (recipe.strCategoryDescription.length > 100) {
		// Slice the description and add ellipsis
		recipe.strCategoryDescription =
			recipe.strCategoryDescription.slice(0, 100) + "...";
	}

	return (
		<div className="bg-blue-100 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
			<img
				className="w-full h-48 object-cover"
				src={recipe.strCategoryThumb}
				alt="Delicious Food"
			/>
			<div className="p-4 text-center">
				<h2 className="text-xl font-semibold mb-2">{recipe.strCategory}</h2>
				<p className="text-gray-700 text-sm mb-3">
					{recipe.strCategoryDescription}
				</p>
				<button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
					Order Now
				</button>
			</div>
		</div>
	);
};

export default FoodCard;
