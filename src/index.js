// Your code here:

// Grab the unordered list (<ul>) elements that we will need for rendering.
const restaurantsList = document.getElementById('restaurants-list');
const usersList = document.getElementById('users-list');
const reservationsList = document.getElementById('reservations-list');

let users;

//////////////////// API GETS
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
// /api/users/:userId/reservations  Given a userId, gets all of their reservations.
const getReservations = async (userId) => {
	const response = await fetch(`/api/users/${userId}/reservations`);
	return await response.json();
};

//////////////////// RENDER FUNCTIONS
const renderRestaurants = (restaurants) => {
	const html = restaurants
		.map((rest) => `<li data-id='${rest.id}'> ${rest.name} </li>`)
		.join('');
	restaurantsList.innerHTML = html;
};

// Clicking on a restaurant should add a reservation for the selected user.
restaurantsList.addEventListener('click', async (event) => {
	if (event.target.nodeName !== 'LI') return; // We only want to handle LI clicks.

	const userId = window.location.hash.slice(1); // Get userId from url
	if (!userId) {
		alert('You must select a user in order to make a reservation');
		return;
	}

	// Make POST req using api
	const reservation = await fetch(`/api/users/${userId}/reservations`, {
		body: JSON.stringify({
			restaurantId: event.target.getAttribute('data-id'),
		}),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	// Rerender reservations
	const reservations = await getReservations(userId);
	renderReservations(reservations);
});

// Renders the <li> elements for Users, given the <ul> usersList.
// Map approach: creates strings for each li, which is given to the <ul>'s innerHTML.
const renderUsers = (users) => {
	// Each li is also a link that, when clicked,
	// the user's reservations should display in the reservation column.

	// parseInt so we can use === to assign class in li
	const idFromURL = parseInt(window.location.hash.slice(1));
	const html = users
		.map(
			(user) =>
				`<li class=${user.id === idFromURL ? 'selected' : 'none'}> <a href="#${
					user.id
				}"> ${user.name} </a> </li>`
		)
		.join('');
	usersList.innerHTML = html;
};

const renderReservations = (reservations) => {
	const html = reservations
		.map(
			(reservation) =>
				`<li> Has reservation at ${reservation.restaurant.name}</li>`
		)
		.join('');
	reservationsList.innerHTML = html;
};

//////////////////// EVENT LISTENERS

// Listens for when a user's name is clicked.
// Invokes renderReservations based on the # in the URL.
window.addEventListener('hashchange', async () => {
	// Get userId from the URL:
	// The location.hash property returns the anchor part of a URL,
	// including the hash sign (#).
	const userId = window.location.hash.slice(1); // Slice to get rid of # character.

	// Get & render
	const reservations = await getReservations(userId);
	renderReservations(reservations);

	// Rerender users so selected users appears highlighted
	renderUsers(users);
});
//////////////////// INIT
// A function that invokes all of our functions, like getX() and renderX().
const init = async () => {
	try {
		const rests = await getRestaurants();
		users = await getUsers();
		renderUsers(users);
		renderRestaurants(rests);

		// Even On page refresh, reservations should persist.
		// Therefore, see if, on page load, there is a # in the URL:
		if (window.location.hash) {
			// If so, render the reservations.
			const userId = window.location.hash.slice(1); // Slice to get rid of # character.
			const reservations = await getReservations(userId);
			renderReservations(reservations);
		}
	} catch (err) {
		console.log(err);
	}
};

init();
