/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nconst loadHomePage = () => {\r\n    //Creating Elements..\r\n    const content = document.getElementById('content');\r\n\r\n    const bodyDiv = document.createElement('div');\r\n    const h2Title = document.createElement('h2');\r\n    const para1 = document.createElement('p');\r\n    const line = document.createElement('div');\r\n    const headshotImg = document.createElement('img');\r\n    const h3Title = document.createElement('h3');\r\n    const para2 = document.createElement('p');\r\n\r\n    // Adding Classes/attributes..\r\n    bodyDiv.id = 'home-container';\r\n    headshotImg.src = '../images/ben-parker-OhKElOkQ3RE-unsplash.jpg';\r\n    headshotImg.alt = 'headshot of person';\r\n\r\n    // Add text content..\r\n    h2Title.textContent = 'Het Ontstaan';\r\n    para1.textContent = 'Sam Pelgroms, gekend van Entrez, neemt samen met zijn vriendin Laura Nollet het gekende The Venue langs de A12 over. Ze vormen het legendarische pand om tot Palma en hopen tegen de heropening van de terrassen in de horeca ook de deuren te openen.'\r\n    h3Title.textContent = 'Chef';\r\n    para2.textContent = 'I love to cook vegan meals!'\r\n\r\n    // Adding to content div..\r\n    bodyDiv.appendChild(h2Title);\r\n    bodyDiv.appendChild(para1);\r\n    bodyDiv.appendChild(line);\r\n    bodyDiv.appendChild(headshotImg);\r\n    bodyDiv.appendChild(h3Title);\r\n    bodyDiv.appendChild(para2);\r\n\r\n    content.appendChild(bodyDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\n(0,_initialize__WEBPACK_IMPORTED_MODULE_0__.onPageLoad)();\r\n\r\nconst eventHandlers = (() => {\r\n    const menuItem = document.getElementById('menu');\r\n    const homeItem = document.getElementById('home');\r\n    const contactItem = document.getElementById('contact');\r\n    menuItem.addEventListener('click', () => {\r\n        const home = document.getElementById('home-container');\r\n        home.remove();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\r\n\r\n    })\r\n    homeItem.addEventListener('click', () => {\r\n        document.getElementById('menu-container').remove();\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\r\n    })\r\n})();\n\n//# sourceURL=webpack://restaurant_top/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPageLoad\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\nconst onPageLoad = () => {\r\n    //Creating Elements..\r\n    const content = document.getElementById('content');\r\n\r\n    const headerDiv = document.createElement('div');\r\n    const title = document.createElement('h1');\r\n    const headerImg = document.createElement('img');\r\n    const nav = document.createElement('nav');\r\n    const homeItem = document.createElement('a');\r\n    const menuItem = document.createElement('a');\r\n    const contactItem = document.createElement('a');\r\n\r\n    const bodyDiv = document.createElement('div');\r\n    const h2Title = document.createElement('h2');\r\n    const para1 = document.createElement('p');\r\n    const line = document.createElement('div');\r\n    const headshotImg = document.createElement('img');\r\n    const h3Title = document.createElement('h3');\r\n    const para2 = document.createElement('p');\r\n\r\n    // Adding Classes/attributes..\r\n    headerDiv.classList.add('header');\r\n    bodyDiv.id = 'home-container';\r\n    headerImg.classList.add('image');\r\n    line.classList.add('line');\r\n    headshotImg.classList.add('headshot-img');\r\n\r\n    nav.classList.add('navbar');\r\n    homeItem.id = 'home';\r\n    menuItem.id = 'menu';\r\n    contactItem.id = 'contact';\r\n\r\n    headerImg.src = '../images/header-image.jpg';\r\n    headerImg.alt = 'image of food';\r\n\r\n    headshotImg.src = '../images/ben-parker-OhKElOkQ3RE-unsplash.jpg';\r\n    headshotImg.alt = 'headshot of person';\r\n\r\n    // Add text content..\r\n    title.textContent = 'Palma';\r\n    homeItem.textContent = 'home';\r\n    menuItem.textContent = 'menu';\r\n    contactItem.textContent = 'contact';\r\n    h2Title.textContent = 'Het Ontstaan';\r\n    para1.textContent = 'Sam Pelgroms, gekend van Entrez, neemt samen met zijn vriendin Laura Nollet het gekende The Venue langs de A12 over. Ze vormen het legendarische pand om tot Palma en hopen tegen de heropening van de terrassen in de horeca ook de deuren te openen.'\r\n    h3Title.textContent = 'Chef';\r\n    para2.textContent = 'I love to cook vegan meals!'\r\n\r\n    // Adding to content div..\r\n    nav.appendChild(homeItem);\r\n    nav.appendChild(menuItem);\r\n    nav.appendChild(contactItem);\r\n\r\n    headerDiv.appendChild(headerImg);\r\n    headerDiv.appendChild(title);\r\n    headerDiv.appendChild(nav);\r\n\r\n    bodyDiv.appendChild(h2Title);\r\n    bodyDiv.appendChild(para1);\r\n    bodyDiv.appendChild(line);\r\n    bodyDiv.appendChild(headshotImg);\r\n    bodyDiv.appendChild(h3Title);\r\n    bodyDiv.appendChild(para2);\r\n\r\n    content.appendChild(headerDiv);\r\n    content.appendChild(bodyDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./src/initialize.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst loadMenuPage = () => {\r\n    const content = document.getElementById('content');\r\n    const menuContainer = document.createElement('div');\r\n\r\n    menuContainer.id = 'menu-container';\r\n    const test = document.createElement('h1');\r\n    test.textContent = 'test test';\r\n\r\n    menuContainer.appendChild(test);\r\n    content.appendChild(menuContainer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;