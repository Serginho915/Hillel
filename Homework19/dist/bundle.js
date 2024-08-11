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

eval("const city = 'Odesa';\nconst APIkey = '13ce92ddea7b4a2945b1cbe519f584e5'\n\nasync function getWeather(){\n    try{\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=${APIkey}`);\n        const data = await response.json();\n    \n        console.log(data);\n\n        document.getElementById('city').innerHTML = city;\n        document.getElementById('temperature').innerText = `Температура: ${data.main.temp}°C`;\n        document.getElementById('description').innerText = `Опис: ${data.weather[0].description}`;\n        \n    }\n    catch (error) {\n        console.error('Error fetching the weather data:', error);\n    }\n}\n\n\ngetWeather()\n\n//# sourceURL=webpack://homework19/./src/index.js?");

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