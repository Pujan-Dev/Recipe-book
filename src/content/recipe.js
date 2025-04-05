const BASE_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

export const getRecipies = async () => {
	const response = await fetch(BASE_URL);

	// Check if the response is okay before parsing
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const data = await response.json();
	return data.categories; // Use 'categories' instead of 'results' based on the API documentation
};
