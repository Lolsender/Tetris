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

/***/ "./src/klocki.ts":
/*!***********************!*\
  !*** ./src/klocki.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar schemat = {\r\n    schem1: [\r\n        [1, 1, 1],\r\n        [0, 1, 0],\r\n        [0, 0, 0]\r\n    ],\r\n    schem2: [\r\n        [0, 1, 1],\r\n        [1, 1, 0],\r\n        [0, 0, 0]\r\n    ],\r\n    schem3: [\r\n        [1, 1, 1, 1],\r\n        [0, 0, 0, 0],\r\n        [0, 0, 0, 0],\r\n        [0, 0, 0, 0]\r\n    ],\r\n    schem4: [\r\n        [1, 1, 1],\r\n        [0, 0, 1],\r\n        [0, 0, 0]\r\n    ],\r\n    schem5: [\r\n        [1, 1],\r\n        [1, 1],\r\n    ],\r\n    schem6: [\r\n        [1, 1, 0],\r\n        [0, 1, 1],\r\n        [0, 0, 0]\r\n    ],\r\n    schem7: [\r\n        [1, 1, 1],\r\n        [1, 0, 0],\r\n        [0, 0, 0]\r\n    ],\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (schemat);\r\n\n\n//# sourceURL=webpack://tetris/./src/klocki.ts?");

/***/ }),

/***/ "./src/tetris.ts":
/*!***********************!*\
  !*** ./src/tetris.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _klocki__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klocki */ \"./src/klocki.ts\");\nvar rozmiar_pola = 25;\r\n\r\nvar tablica = [\r\n    [\"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\"],\r\n];\r\nvar plansza_div = document.createElement(\"div\");\r\nplansza_div.classList.add(\"plansza\");\r\ndocument.body.appendChild(plansza_div);\r\nvar plansza = document.createElement(\"img\");\r\nplansza.classList.add(\"plansza\");\r\nplansza.src = \"./assets/plansza.png\";\r\nplansza_div.appendChild(plansza);\r\nvar next;\r\nlosowanie_nexta();\r\nvar zmiennaOdnawiania = 0;\r\n////////\r\nfunction losowanie_nexta() {\r\n    if (document.getElementById(\"next\")) {\r\n        plansza_div.removeChild(document.getElementById(\"next\"));\r\n    }\r\n    next = Math.floor(Math.random() * (7 - 1)) + 1;\r\n    var next_img = document.createElement(\"img\");\r\n    next_img.id = \"next\";\r\n    if (next == 3) {\r\n        next_img.style.width = 100 + 'px';\r\n    }\r\n    else if (next == 5) {\r\n        next_img.style.width = 50 + 'px';\r\n        next_img.style.height = 50 + 'px';\r\n    }\r\n    else {\r\n        next_img.style.width = 75 + 'px';\r\n        next_img.style.height = 50 + 'px';\r\n    }\r\n    next_img.src = \"./assets/kolor\" + next + \".png\";\r\n    plansza_div.appendChild(next_img);\r\n    return next;\r\n}\r\n//////\r\nvar left_paska = 505;\r\nfor (var i = 0; i < 7; i++) {\r\n    var pasek = document.createElement(\"div\");\r\n    pasek.style.width = \"20px\";\r\n    pasek.style.height = \"10px\";\r\n    pasek.style.top = \"705px\";\r\n    pasek.style.left = left_paska + \"px\";\r\n    pasek.style.position = \"absolute\";\r\n    pasek.style.backgroundColor = \"yellow\";\r\n    pasek.id = i + \"_p\";\r\n    left_paska = left_paska + 25;\r\n    // pasek.style.margin = \"5px\"\r\n    pasek.style.left = left_paska + \"px\";\r\n    plansza_div.appendChild(pasek);\r\n}\r\n//////\r\nvar klocek;\r\nvar dodawany = next;\r\nlosowanie_nexta();\r\nswitch (dodawany) {\r\n    case 1: {\r\n        klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem1;\r\n        break;\r\n    }\r\n    case 2: {\r\n        klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem2;\r\n        break;\r\n    }\r\n    case 3: {\r\n        klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem3;\r\n        break;\r\n    }\r\n    case 4: {\r\n        klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem4;\r\n        break;\r\n    }\r\n    case 5: {\r\n        klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem5;\r\n        break;\r\n    }\r\n    case 6: {\r\n        klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem6;\r\n        break;\r\n    }\r\n    case 7: {\r\n        klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem7;\r\n        break;\r\n    }\r\n}\r\nvar x = 4;\r\nvar y = 1;\r\nvar zmienna = false;\r\nvar prawo = false;\r\nvar lewo = false;\r\nfunction spadanie(gdzie) {\r\n    var sprawdza_czy_git = false;\r\n    if (gdzie == \"dol\") {\r\n        sprawdza_czy_git = sprawdzanie_dol();\r\n    }\r\n    else if (gdzie == \"lewo\") {\r\n        sprawdza_czy_git = sprawdzanie_lewo();\r\n    }\r\n    else if (gdzie == \"prawo\") {\r\n        sprawdza_czy_git = sprawdzanie_prawo();\r\n    }\r\n    if (sprawdza_czy_git) {\r\n        for (var i = 0; i < tablica.length; i++) {\r\n            for (var j = 0; j < tablica[0].length; j++) {\r\n                if (tablica[i][j] == 1) {\r\n                    tablica[i][j] = 0;\r\n                }\r\n            }\r\n        }\r\n        for (var i = 0; i < klocek.length; i++) {\r\n            for (var j = 0; j < klocek[i].length; j++) {\r\n                if (klocek[i][j] == 1) {\r\n                    tablica[y + i][x + j] = klocek[i][j];\r\n                }\r\n            }\r\n        }\r\n        if (document.getElementById(\"klocuch\")) {\r\n            plansza_div.removeChild(document.getElementById(\"klocuch\"));\r\n        }\r\n        var pion = 178 + 26 * y;\r\n        var poziom = 15 + 26 * x;\r\n        var dodawany_img = document.createElement(\"img\");\r\n        dodawany_img.src = \"./assets/kolor\" + dodawany + \".png\";\r\n        dodawany_img.id = \"klocuch\";\r\n        dodawany_img.style.left = poziom + \"px\";\r\n        dodawany_img.style.top = pion + \"px\";\r\n        dodawany_img.style.position = \"absolute\";\r\n        if (dodawany == 3) {\r\n            dodawany_img.style.width = klocek.length * rozmiar_pola + \"px\";\r\n            dodawany_img.style.height = 25 + \"px\";\r\n        }\r\n        else if (dodawany == 5) {\r\n            dodawany_img.style.width = klocek.length * rozmiar_pola + \"px\";\r\n            dodawany_img.style.height = klocek.length * rozmiar_pola + \"px\";\r\n        }\r\n        else {\r\n            dodawany_img.style.width = klocek.length * rozmiar_pola + \"px\";\r\n            dodawany_img.style.height = (klocek.length - 1) * rozmiar_pola + \"px\";\r\n        }\r\n        plansza_div.appendChild(dodawany_img);\r\n        // console.clear()\r\n        console.table(tablica);\r\n    }\r\n    else {\r\n        clearInterval(interwalek);\r\n    }\r\n}\r\nvar interwalek = setInterval(function () {\r\n    for (var i = 0; i < klocek.length; i++) { //przyszłe położenie klocka\r\n        for (var j = 0; j < klocek[i].length; j++) {\r\n            if (klocek[i][j] == 1) {\r\n                // tablica[y + i][x + j] = klocek[i][j]\r\n                if (tablica[y + i + 1][x + j] == 2 || tablica[y + i + 1][x + j] == 'x') {\r\n                    zmienna = true;\r\n                    clearInterval(interwalek);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    for (var i = 0; i < klocek.length; i++) {\r\n        for (var j = 0; j < klocek[i].length; j++) {\r\n            if (klocek[i][j] == 1) {\r\n                // tablica[y + i][x + j] = klocek[i][j]\r\n                if (tablica[y + i][x + j + 1] == 2 || tablica[y + i][x + j + 1] == 'x') {\r\n                    prawo = true;\r\n                }\r\n                else if (tablica[y + i][x + j - 1] == 2 || tablica[y + i][x + j - 1] == 'x') {\r\n                    lewo = true;\r\n                }\r\n                else {\r\n                    lewo = false;\r\n                    prawo = false;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    spadanie(\"dol\");\r\n    if (zmienna == false) {\r\n        spadanie(\"dol\");\r\n    }\r\n    else {\r\n        setTimeout(function () {\r\n            console.log(\"trzeba losować\");\r\n            var klocuch = document.getElementById('klocuch');\r\n            klocuch.src = './assets/szary' + dodawany + '.png';\r\n            losowanie_nexta();\r\n            zmiennaOdnawiania = 1;\r\n        }, 1000);\r\n    }\r\n    y++;\r\n}, 1000);\r\nfunction sprawdzanie_dol() {\r\n    var sprawdzenie_czy_dobrze = 0;\r\n    for (var i = 0; i < klocek.length; i++) {\r\n        for (var j = 0; j < klocek[i].length; j++) {\r\n            if (klocek[i][j] == 1) {\r\n                // tablica[y + i][x + j] = klocek[i][j]\r\n                if (tablica[y + i][x + j] == 2) {\r\n                    console.log('dzieje sie');\r\n                    zmienna = true;\r\n                    sprawdzenie_czy_dobrze++;\r\n                }\r\n                else if (tablica[y + i][x + j] == 'x') {\r\n                    zmienna = true;\r\n                    sprawdzenie_czy_dobrze++;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return (sprawdzenie_czy_dobrze == 0);\r\n}\r\nfunction sprawdzanie_lewo() {\r\n    var sprawdzenie_czy_dobrze = 0;\r\n    for (var i = 0; i < klocek.length; i++) {\r\n        for (var j = 0; j < klocek[i].length; j++) {\r\n            if (klocek[i][j] == 1) {\r\n                // tablica[y + i][x + j] = klocek[i][j]\r\n                if (tablica[y + i][x + j] == 2) {\r\n                    console.log('dzieje sie');\r\n                    sprawdzenie_czy_dobrze++;\r\n                }\r\n                else if (tablica[y + i][x + j] == 'x') {\r\n                    sprawdzenie_czy_dobrze++;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return (sprawdzenie_czy_dobrze == 0);\r\n}\r\nfunction sprawdzanie_prawo() {\r\n    var sprawdzenie_czy_dobrze = 0;\r\n    for (var i = 0; i < klocek.length; i++) {\r\n        for (var j = 0; j < klocek[i].length; j++) {\r\n            if (klocek[i][j] == 1) {\r\n                // tablica[y + i][x + j] = klocek[i][j]\r\n                if (tablica[y + i][x + 1 + j] == 2) {\r\n                    console.log('dzieje sie');\r\n                    sprawdzenie_czy_dobrze++;\r\n                }\r\n                else if (tablica[y + i][x + 1 + j] == 'x') {\r\n                    sprawdzenie_czy_dobrze++;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return (sprawdzenie_czy_dobrze == 0);\r\n}\r\ndocument.addEventListener(\"keydown\", function (e) {\r\n    if (e.key == \"s\") {\r\n        if (!zmienna) {\r\n            spadanie(\"dol\");\r\n            y++;\r\n            console.log(y);\r\n        }\r\n    }\r\n    else if (e.key == \"a\") {\r\n        if (!lewo) {\r\n            spadanie(\"lewo\");\r\n            x--;\r\n        }\r\n    }\r\n    else if (e.key == \"d\") {\r\n        if (!prawo) {\r\n            spadanie(\"prawo\");\r\n            x++;\r\n            console.log();\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://tetris/./src/tetris.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/tetris.ts");
/******/ 	
/******/ })()
;