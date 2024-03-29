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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\nconst config = {\r\n    apiKey: 'AIzaSyCWN5lN6vpa1BIygvtAACh6wX7zuaR5vAI',\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./config.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\r\n\r\nconst loadContactPage = () => {\r\n    const content = document.getElementById('content');\r\n    const contactContainer = document.createElement('div');\r\n\r\n    const h2Title = document.createElement('h2');\r\n    const contactCard = document.createElement('div');\r\n    const h3Title = document.createElement('h3');\r\n    const para1 = document.createElement('p')\r\n    const para2 = document.createElement('p');\r\n    const h3Title2 = document.createElement('h3');\r\n    const mapCard = document.createElement('div');\r\n\r\n    // Create the script tag, set the appropriate attributes\r\n    var script = document.createElement('script');\r\n    script.src = `https://maps.googleapis.com/maps/api/js?key=${_config__WEBPACK_IMPORTED_MODULE_0__.config.apiKey}&callback=initMap`;\r\n    script.async = true;\r\n\r\n    // Attach your callback function to the `window` object\r\n    window.initMap = function() {\r\n    // JS API is loaded and available\r\n    // The location of Uluru\r\n    const brussels = { lat: 50.84965958068527, lng: 4.347751332061692 };\r\n    // The map, centered at Uluru\r\n    const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n      zoom: 14,\r\n      center: brussels,\r\n    });\r\n    // The marker, positioned at Uluru\r\n    const marker = new google.maps.Marker({\r\n      position: brussels,\r\n      map: map,\r\n    });\r\n    };\r\n\r\n    // Append the 'script' element to 'head'\r\n    document.head.appendChild(script);\r\n\r\n\r\n    contactContainer.id = 'contact-container';\r\n    h2Title.textContent = 'Contact';\r\n    h3Title.textContent = 'Phone & Email';\r\n    para1.textContent = '0474 59 87 62';\r\n    para2.textContent = 'palma@notreal.com';\r\n    h3Title2.textContent = 'Map';\r\n    mapCard.id = 'map';\r\n    contactCard.id = 'contact';\r\n\r\n    contactContainer.appendChild(h2Title);\r\n    contactCard.appendChild(h3Title);\r\n    contactCard.appendChild(para1);\r\n    contactCard.appendChild(para2);\r\n    contactCard.appendChild(h3Title2);\r\n\r\n    contactContainer.appendChild(contactCard);\r\n    contactContainer.appendChild(mapCard);\r\n    content.appendChild(contactContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nconst loadHomePage = () => {\r\n    //Creating Elements..\r\n    const content = document.getElementById('content');\r\n\r\n    const bodyDiv = document.createElement('div');\r\n    const h2Title = document.createElement('h2');\r\n    const para1 = document.createElement('p');\r\n    const line = document.createElement('div');\r\n    const headshotImg = document.createElement('img');\r\n    const h3Title = document.createElement('h3');\r\n    const para2 = document.createElement('p');\r\n\r\n    // Adding Classes/attributes..\r\n    bodyDiv.id = 'home-container';\r\n    line.classList.add('line');\r\n    headshotImg.classList.add('headshot-img');\r\n    headshotImg.src = './images/ben-parker-OhKElOkQ3RE-unsplash.jpg';\r\n    headshotImg.alt = 'headshot of person';\r\n\r\n    // Add text content..\r\n    h2Title.textContent = 'Welcome';\r\n    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\r\n    h3Title.textContent = 'Chef';\r\n    para2.textContent = 'I love to cook vegan meals!'\r\n\r\n    // Adding to content div..\r\n    bodyDiv.appendChild(h2Title);\r\n    bodyDiv.appendChild(para1);\r\n    bodyDiv.appendChild(line);\r\n    bodyDiv.appendChild(headshotImg);\r\n    bodyDiv.appendChild(h3Title);\r\n    bodyDiv.appendChild(para2);\r\n\r\n    content.appendChild(bodyDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ \"./src/initialize.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_initialize__WEBPACK_IMPORTED_MODULE_0__.onPageLoad)();\r\n\r\nconst eventHandlers = (() => {\r\n    const menuItem = document.getElementById('menu');\r\n    const homeItem = document.getElementById('home');\r\n    const contactItem = document.getElementById('contact');\r\n    menuItem.addEventListener('click', () => {\r\n        if (document.getElementById('home-container')){\r\n            document.getElementById('home-container').remove();\r\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\r\n        }\r\n        if (document.getElementById('contact-container')){\r\n            document.getElementById('contact-container').remove();\r\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\r\n        }\r\n    })\r\n    homeItem.addEventListener('click', () => {\r\n        if (document.getElementById('menu-container')){\r\n            document.getElementById('menu-container').remove();\r\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\r\n        }\r\n        if (document.getElementById('contact-container')){\r\n            document.getElementById('contact-container').remove();\r\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\r\n        }\r\n    })\r\n    contactItem.addEventListener('click', () => {\r\n        if (document.getElementById('menu-container')){\r\n            document.getElementById('menu-container').remove();\r\n            (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContactPage)();\r\n        }\r\n        if (document.getElementById('home-container')){\r\n            document.getElementById('home-container').remove();\r\n            (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContactPage)();\r\n        }\r\n    })\r\n})();\r\n  \n\n//# sourceURL=webpack://restaurant_top/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onPageLoad\": () => (/* binding */ onPageLoad)\n/* harmony export */ });\nconst onPageLoad = () => {\r\n    //Creating Elements..\r\n    const content = document.getElementById('content');\r\n\r\n    const headerDiv = document.createElement('div');\r\n    const title = document.createElement('h1');\r\n    const headerImg = document.createElement('img');\r\n    const nav = document.createElement('nav');\r\n    const homeItem = document.createElement('a');\r\n    const menuItem = document.createElement('a');\r\n    const contactItem = document.createElement('a');\r\n\r\n    const bodyDiv = document.createElement('div');\r\n    const h2Title = document.createElement('h2');\r\n    const para1 = document.createElement('p');\r\n    const line = document.createElement('div');\r\n    const headshotImg = document.createElement('img');\r\n    const h3Title = document.createElement('h3');\r\n    const para2 = document.createElement('p');\r\n\r\n    // Adding Classes/attributes..\r\n    headerDiv.classList.add('header');\r\n    bodyDiv.id = 'home-container';\r\n    headerImg.classList.add('image');\r\n    line.classList.add('line');\r\n    headshotImg.classList.add('headshot-img');\r\n\r\n    nav.classList.add('navbar');\r\n    homeItem.id = 'home';\r\n    menuItem.id = 'menu';\r\n    contactItem.id = 'contact';\r\n\r\n    headerImg.src = './images/header-image.jpg';\r\n    headerImg.alt = 'image of food';\r\n\r\n    headshotImg.src = './images/ben-parker-OhKElOkQ3RE-unsplash.jpg';\r\n    headshotImg.alt = 'headshot of person';\r\n\r\n    // Add text content..\r\n    title.textContent = 'Palma';\r\n    homeItem.textContent = 'home';\r\n    menuItem.textContent = 'menu';\r\n    contactItem.textContent = 'contact';\r\n    h2Title.textContent = 'Welcome';\r\n    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\r\n    h3Title.textContent = 'Chef';\r\n    para2.textContent = 'I love to cook vegan meals!'\r\n\r\n    // Adding to content div..\r\n    nav.appendChild(homeItem);\r\n    nav.appendChild(menuItem);\r\n    nav.appendChild(contactItem);\r\n\r\n    headerDiv.appendChild(headerImg);\r\n    headerDiv.appendChild(title);\r\n    headerDiv.appendChild(nav);\r\n\r\n    bodyDiv.appendChild(h2Title);\r\n    bodyDiv.appendChild(para1);\r\n    bodyDiv.appendChild(line);\r\n    bodyDiv.appendChild(headshotImg);\r\n    bodyDiv.appendChild(h3Title);\r\n    bodyDiv.appendChild(para2);\r\n\r\n    content.appendChild(headerDiv);\r\n    content.appendChild(bodyDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./src/initialize.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst loadMenuPage = () => {\r\n    const content = document.getElementById('content');\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.id = 'menu-container';\r\n\r\n    // Img 1\r\n    const menuCard1 = document.createElement('div');\r\n    const h2Title1 = document.createElement('div');\r\n    const img1 = document.createElement('img');\r\n    const overlay1 = document.createElement('div');\r\n\r\n    img1.src = './images/vegan-curry.jpg';\r\n    img1.alt = 'vegan curry';\r\n\r\n    h2Title1.textContent = 'Vegan Curry';\r\n\r\n    img1.classList.add('menu-img');\r\n    h2Title1.classList.add('menu-title');\r\n    overlay1.classList.add('overlay');\r\n    menuCard1.classList.add('container');\r\n\r\n    overlay1.appendChild(h2Title1);\r\n    menuCard1.appendChild(img1);\r\n    menuCard1.appendChild(overlay1);\r\n    menuContainer.appendChild(menuCard1);\r\n\r\n    // Img 2\r\n    const menuCard2 = document.createElement('div');\r\n    const h2Title2 = document.createElement('div');\r\n    const img2 = document.createElement('img');\r\n    const overlay2 = document.createElement('div');\r\n\r\n    img2.src = './images/korean-bbq.jpg';\r\n    img2.alt = 'Korean BBQ';\r\n\r\n    h2Title2.textContent = 'Korean BBQ';\r\n\r\n    img2.classList.add('menu-img');\r\n    h2Title2.classList.add('menu-title');\r\n    overlay2.classList.add('overlay');\r\n    menuCard2.classList.add('container');\r\n\r\n    overlay2.appendChild(h2Title2);\r\n    menuCard2.appendChild(img2);\r\n    menuCard2.appendChild(overlay2);\r\n    menuContainer.appendChild(menuCard2);\r\n\r\n    // Img 3\r\n    const menuCard3 = document.createElement('div');\r\n    const h2Title3 = document.createElement('div');\r\n    const img3 = document.createElement('img');\r\n    const overlay3 = document.createElement('div');\r\n\r\n    img3.src = './images/pasta.jpg';\r\n    img3.alt = 'Pasta with Kale';\r\n\r\n    h2Title3.textContent = 'Pasta & Kale';\r\n\r\n    img3.classList.add('menu-img');\r\n    h2Title3.classList.add('menu-title');\r\n    overlay3.classList.add('overlay');\r\n    menuCard3.classList.add('container');\r\n\r\n    overlay3.appendChild(h2Title3);\r\n    menuCard3.appendChild(img3);\r\n    menuCard3.appendChild(overlay3);\r\n    menuContainer.appendChild(menuCard3);\r\n\r\n    content.appendChild(menuContainer)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant_top/./src/menu.js?");

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