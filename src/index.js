// Your code here:

// Grab the unordered list (<ul>) elements that we will need for rendering.
const restaurantsList = document.getElementById('restaurants-list');
const usersList = document.getElementById('users-list');
const reservationsList = document.getElementById('reservations-list');

// Fetch the /api/restaurants route to get restaurants data from database.
const getRestaurants = async () => {
	const response = await fetch('/api/restaurants');
	return await response.json(); // Return it as a json (which needs an await)
};

// Fetch the /api/users route to get users data from database.
const getUsers = async () => {
	const response = await fetch('/api/users');
	return await response.json(); // Return it as a json
};

// TODO!
// /api/users/:userId/reservations
const getReservations = async () => {
	const response = await fetch('/api/');
};

// Renders the <li> elements for restaurants, given the <ul> restaurantssList.
// Using let...of loop and .createElement, innerText, and .appendChild
// This is just one way to approach how to render the html.
const renderRestaurants = (restaurants) => {
	for (let restaurant of restaurants) {
		const element = document.createElement('li'); // Create a new list element
		element.innerText = restaurant.name; // Give it the restaurant's name
		restaurantsList.appendChild(element); // Attach current li to the ul.
	}
};

// Renders the <li> elements for Users, given the <ul> usersList.
// Map approach: creates strings for each li, which is given to the <ul>'s innerHTML.
const renderUsers = (users) => {
	const html = users.map((user) => `<li> ${user.name} </li>`).join('');
	usersList.innerHTML = html;
};

// A function that invokes all of our functions, like getX() and renderX()
const init = async () => {
	try {
		const rests = await getRestaurants();
		const users = await getUsers();

		renderUsers(users);
		renderRestaurants(rests);
	} catch (err) {
		next(err);
	}
};

init();

console.log('hello!');
