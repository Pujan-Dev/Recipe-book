import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { getRecipies } from "../content/recipe";

const Home = () => {
	const [recipies, setRecipies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const load_recipies = async () => {
			const recipiesData = await getRecipies();
			setRecipies(recipiesData);
		};
		load_recipies();
	}, []);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-900">
			{recipies.map((rec, index) => (
				<FoodCard recipe={rec} key={index} />
			))}
		</div>
	);
};

export default Home;
