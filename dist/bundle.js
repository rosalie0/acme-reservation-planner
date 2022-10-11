/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Your code here:\n\n// Grab the unordered list (<ul>) elements that we will need for rendering.\nconst restaurantsList = document.getElementById('restaurants-list');\nconst usersList = document.getElementById('users-list');\nconst reservationsList = document.getElementById('reservations-list');\n\n// Fetch the /api/restaurants route to get restaurants data from database.\nconst getRestaurants = async () => {\n\tconst response = await fetch('/api/restaurants');\n\treturn await response.json(); // Return it as a json (which needs an await)\n};\n\n// Fetch the /api/users route to get users data from database.\nconst getUsers = async () => {\n\tconst response = await fetch('/api/users');\n\treturn await response.json(); // Return it as a json\n};\n\n// TODO!\n// /api/users/:userId/reservations\n// Given a userId, gets all of their reservations.\nconst getReservations = async (userId) => {\n\tconst response = await fetch(`/api/users/${userId}/reservations`);\n\treturn await response.json();\n};\n\nconst renderReservations = (reservations) => {\n\tconst html = reservations\n\t\t.map(\n\t\t\t(reservation) =>\n\t\t\t\t`<li> Has reservation at ${reservation.restaurant.name}</li>`\n\t\t)\n\t\t.join('');\n\treservationsList.innerHTML = html;\n};\n\n// Renders the <li> elements for restaurants, given the <ul> restaurantssList.\n// Using let...of loop and .createElement, innerText, and .appendChild\n// This is just one way to approach how to render the html.\nconst renderRestaurants = (restaurants) => {\n\tfor (let restaurant of restaurants) {\n\t\tconst element = document.createElement('li'); // Create a new list element\n\t\telement.innerText = restaurant.name; // Give it the restaurant's name\n\t\trestaurantsList.appendChild(element); // Attach current li to the ul.\n\t}\n};\n\n// Renders the <li> elements for Users, given the <ul> usersList.\n// Map approach: creates strings for each li, which is given to the <ul>'s innerHTML.\nconst renderUsers = (users) => {\n\t// Each li is also a link that, when clicked,\n\t// the user's reservations should display in the reservation column.\n\t// TODO!!!\n\tconst html = users\n\t\t.map((user) => `<li> <a href=\"#${user.id}\"> ${user.name} </a> </li>`)\n\t\t.join('');\n\tusersList.innerHTML = html;\n};\n\n// A function that invokes all of our functions, like getX() and renderX().\nconst init = async () => {\n\ttry {\n\t\tconst rests = await getRestaurants();\n\t\tconst users = await getUsers();\n\n\t\trenderUsers(users);\n\t\trenderRestaurants(rests);\n\n\t\t// Even On page refresh, reservations should persist.\n\t\t// Therefore, see if, on page load, there is a # in the URL:\n\t\tif (window.location.hash) {\n\t\t\t// If so, render the reservations.\n\t\t\tconst userId = window.location.hash.slice(1); // Slice to get rid of # character.\n\t\t\tconst reservations = await getReservations(userId);\n\t\t\trenderReservations(reservations);\n\t\t}\n\t} catch (err) {\n\t\tconsole.log(err);\n\t}\n};\n\ninit();\n\n// Listens for when a user's name is clicked.\n// Invokes renderReservations based on the # in the URL.\nwindow.addEventListener('hashchange', async () => {\n\t// Get userId from the URL:\n\t// The location.hash property sets or returns the anchor part of a URL,\n\t// including the hash sign (#).\n\tconst userId = window.location.hash.slice(1); // Slice to get rid of # character.\n\n\t// Get the Reservations for userId\n\tconst reservations = await getReservations(userId);\n\n\t// Render\n\trenderReservations(reservations);\n});\n\nconsole.log('hello!');\n\n\n//# sourceURL=webpack://acme_reservation_planner/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;