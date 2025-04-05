import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { getRecipies } from "../content/recipe";

const Home = () => {
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const loadRecipies = async () => {
      try {
        const load_recipies = await getRecipies();
        setRecipies(load_recipies);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadRecipies(); // Call the function to fetch recipes
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while recipes are being fetched
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-900">
      {recipies.map((rec) => (
        <FoodCard recipe={rec} key={rec.idCategory} /> // Use unique key
      ))}
    </div>
  );
};

export default Home;
