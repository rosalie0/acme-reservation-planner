// Your code here:

// Use the fetch API to call the appropriate routes to display the data (/api/users and /api/restaurants)
// Display users in the users-list unordered list and restaurants can be displayed in the restaurants-list unordered list.
// Create HTML with a template literal by mapping over the users and restaurants.
const restaurantElement = document.getElementById('restaurants-list');

const getRestaurants = async () => {
	const response = await fetch('http://localhost:3000/api/restaurants');
	const json = await response.json();
	return json;
};

const renderRestaurants = (restaurants) => {
	for (let rest of restaurants) {
		const element = document.createElement('li');
		element.innerText = 'Name: ' + rest.name;
		console.log(element.innerText);
		restaurantElement.appendChild(element);
	}
};

const init = async () => {
	const rests = await getRestaurants();
	renderRestaurants(rests);
};

init();

console.log('hello!');
