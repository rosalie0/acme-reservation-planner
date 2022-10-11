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

eval("// Your code here:\n\n// Use the fetch API to call the appropriate routes to display the data (/api/users and /api/restaurants)\n// Display users in the users-list unordered list and restaurants can be displayed in the restaurants-list unordered list.\n// Create HTML with a template literal by mapping over the users and restaurants.\nconst restaurantElement = document.getElementById('restaurants-list');\n\nconst getRestaurants = async () => {\n\tconst response = await fetch('http://localhost:3000/api/restaurants');\n\tconst json = await response.json();\n\treturn json;\n};\n\nconst renderRestaurants = (restaurants) => {\n\tfor (let rest of restaurants) {\n\t\tconst element = document.createElement('li');\n\t\telement.innerText = 'Name: ' + rest.name;\n\t\tconsole.log(element.innerText);\n\t\trestaurantElement.appendChild(element);\n\t}\n};\n\nconst init = async () => {\n\tconst rests = await getRestaurants();\n\trenderRestaurants(rests);\n};\n\ninit();\n\nconsole.log('hello!');\n\n\n//# sourceURL=webpack://acme_reservation_planner/./src/index.js?");

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