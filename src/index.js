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
// Given a userId, gets all of their reservations.
const getReservations = async (userId) => {
	const response = await fetch(`/api/users/${userId}/reservations`);
	return await response.json();
};

const renderReservations = (reservations) => {
	const html = reservations.map((reservation) => `<li></li>`);
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
	// Each li is also a link that, when clicked,
	// the user's reservations should display in the reservation column.
	// TODO!!!
	const html = users
		.map((user) => `<li> <a href="${user.id}"> ${user.name} </a> </li>`)
		.join('');
	usersList.innerHTML = html;
};

// A function that invokes all of our functions, like getX() and renderX()
const init = async () => {
	try {
		const rests = await getRestaurants();
		const users = await getUsers();

		renderUsers(users);
		renderRestaurants(rests);

		// Testing to see if getReservations works:
		// console.log(await getReservations(2));
	} catch (err) {
		next(err);
	}
};

init();

console.log('hello!');
