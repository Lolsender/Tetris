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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _klocki__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klocki */ \"./src/klocki.ts\");\nvar rozmiar_pola = 25;\r\n\r\nvar tablica = [\r\n    [\"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, \"x\"],\r\n    [\"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\", \"x\"],\r\n];\r\nvar plansza_div = document.createElement(\"div\");\r\nplansza_div.classList.add(\"plansza\");\r\ndocument.body.appendChild(plansza_div);\r\nvar plansza = document.createElement(\"img\");\r\nplansza.classList.add(\"plansza\");\r\nplansza.src = \"./assets/plansza.png\";\r\nplansza_div.appendChild(plansza);\r\nvar next;\r\nvar punkty = 0;\r\nvar linie = 0;\r\nvar score = document.createElement(\"div\");\r\nscore.id = \"wynik\";\r\nscore.style.position = \"absolute\";\r\nscore.style.width = 140 + 'px';\r\nscore.style.height = 30 + 'px';\r\nscore.style.left = 180 + \"px\";\r\nscore.style.top = 32 + \"px\";\r\nscore.style.textAlign = \"right\";\r\nscore.style.fontSize = \"30px\";\r\nscore.style.color = \"white\";\r\nscore.innerHTML = \"0\";\r\nplansza_div.appendChild(score);\r\nvar lines = document.createElement(\"div\");\r\nlines.id = \"linie\";\r\nlines.style.position = \"absolute\";\r\nlines.style.width = 140 + 'px';\r\nlines.style.height = 30 + 'px';\r\nlines.style.left = 180 + \"px\";\r\nlines.style.top = 88 + \"px\";\r\nlines.style.textAlign = \"right\";\r\nlines.style.fontSize = \"30px\";\r\nlines.style.color = \"white\";\r\nlines.innerHTML = \"0\";\r\nplansza_div.appendChild(lines);\r\nvar level = document.createElement(\"div\");\r\nlevel.id = \"level\";\r\nlevel.style.position = \"absolute\";\r\nlevel.style.width = 140 + 'px';\r\nlevel.style.height = 30 + 'px';\r\nlevel.style.left = 180 + \"px\";\r\nlevel.style.top = 144 + \"px\";\r\nlevel.style.textAlign = \"right\";\r\nlevel.style.fontSize = \"30px\";\r\nlevel.style.color = \"white\";\r\nlevel.innerHTML = \"0\";\r\nplansza_div.appendChild(level);\r\nlosowanie_nexta();\r\nvar zmiennaOdnawiania = 0;\r\n////////\r\nfunction losowanie_nexta() {\r\n    if (document.getElementById(\"next\")) {\r\n        plansza_div.removeChild(document.getElementById(\"next\"));\r\n    }\r\n    next = Math.floor(Math.random() * (7)) + 1;\r\n    var next_img = document.createElement(\"img\");\r\n    next_img.id = \"next\";\r\n    if (next == 3) {\r\n        next_img.style.width = 100 + 'px';\r\n    }\r\n    else if (next == 5) {\r\n        next_img.style.width = 50 + 'px';\r\n        next_img.style.height = 50 + 'px';\r\n    }\r\n    else {\r\n        next_img.style.width = 75 + 'px';\r\n        next_img.style.height = 50 + 'px';\r\n    }\r\n    next_img.src = \"./assets/kolor\" + next + \".png\";\r\n    plansza_div.appendChild(next_img);\r\n    return next;\r\n}\r\n//////\r\nvar left_paska = 505;\r\nfor (var i = 0; i < 7; i++) {\r\n    var pasek = document.createElement(\"div\");\r\n    pasek.style.width = \"20px\";\r\n    pasek.style.height = \"10px\";\r\n    pasek.style.top = \"705px\";\r\n    pasek.style.left = left_paska + \"px\";\r\n    pasek.style.position = \"absolute\";\r\n    pasek.style.backgroundColor = \"yellow\";\r\n    pasek.id = i + \"_p\";\r\n    left_paska = left_paska + 25;\r\n    // pasek.style.margin = \"5px\"\r\n    pasek.style.left = left_paska + \"px\";\r\n    plansza_div.appendChild(pasek);\r\n}\r\n//////\r\nwszystko_z_klockiem();\r\nfunction wszystko_z_klockiem() {\r\n    var klocek;\r\n    var dodawany = next;\r\n    losowanie_nexta();\r\n    switch (dodawany) {\r\n        case 1: {\r\n            klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem1;\r\n            break;\r\n        }\r\n        case 2: {\r\n            klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem2;\r\n            break;\r\n        }\r\n        case 3: {\r\n            klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem3;\r\n            break;\r\n        }\r\n        case 4: {\r\n            klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem4;\r\n            break;\r\n        }\r\n        case 5: {\r\n            klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem5;\r\n            break;\r\n        }\r\n        case 6: {\r\n            klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem6;\r\n            break;\r\n        }\r\n        case 7: {\r\n            klocek = _klocki__WEBPACK_IMPORTED_MODULE_0__[\"default\"].schem7;\r\n            break;\r\n        }\r\n    }\r\n    var x = 4;\r\n    var y = 1;\r\n    var transform = 'rotate(0deg)';\r\n    var pion = 178 + 26 * y;\r\n    var poziom = 15 + 26 * x;\r\n    var zmienna = false;\r\n    var prawo = false;\r\n    var lewo = false;\r\n    var korekta = 0;\r\n    function spadanie(gdzie) {\r\n        var sprawdza_czy_git = false;\r\n        if (gdzie == \"dol\") {\r\n            sprawdza_czy_git = sprawdzanie_dol();\r\n        }\r\n        else if (gdzie == \"lewo\") {\r\n            sprawdza_czy_git = sprawdzanie_lewo();\r\n        }\r\n        else if (gdzie == \"prawo\") {\r\n            sprawdza_czy_git = sprawdzanie_prawo();\r\n        }\r\n        if (sprawdza_czy_git) {\r\n            for (var i = 0; i < tablica.length; i++) {\r\n                for (var j = 0; j < tablica[0].length; j++) {\r\n                    if (tablica[i][j] == 1) {\r\n                        tablica[i][j] = 0;\r\n                    }\r\n                }\r\n            }\r\n            for (var i = 0; i < klocek.length; i++) {\r\n                for (var j = 0; j < klocek[i].length; j++) {\r\n                    if (klocek[i][j] == 1) {\r\n                        tablica[y + i][x + j] = klocek[i][j];\r\n                    }\r\n                }\r\n            }\r\n            if (document.getElementById(\"klocuch nowy\")) {\r\n                plansza_div.removeChild(document.getElementById(\"klocuch nowy\"));\r\n            }\r\n            var dodawany_img = document.createElement(\"img\");\r\n            dodawany_img.src = \"./assets/kolor\" + dodawany + \".png\";\r\n            dodawany_img.id = \"klocuch nowy\";\r\n            pion = (178 + 26 * y) + korekta;\r\n            poziom = (15 + 26 * x) - korekta;\r\n            dodawany_img.style.left = poziom + \"px\";\r\n            dodawany_img.style.top = pion + 2 + \"px\";\r\n            dodawany_img.style.position = \"absolute\";\r\n            dodawany_img.style.transform = transform;\r\n            if (dodawany == 3) {\r\n                dodawany_img.style.width = klocek.length * rozmiar_pola + \"px\";\r\n                dodawany_img.style.height = 25 + \"px\";\r\n            }\r\n            else if (dodawany == 5) {\r\n                dodawany_img.style.width = klocek.length * rozmiar_pola + \"px\";\r\n                dodawany_img.style.height = klocek.length * rozmiar_pola + \"px\";\r\n            }\r\n            else {\r\n                dodawany_img.style.width = klocek.length * rozmiar_pola + \"px\";\r\n                dodawany_img.style.height = (klocek.length - 1) * rozmiar_pola + \"px\";\r\n            }\r\n            plansza_div.appendChild(dodawany_img);\r\n        }\r\n        else if (gdzie == \"lewo\") {\r\n            x++;\r\n        }\r\n        else if (gdzie == \"prawo\") {\r\n            x--;\r\n        }\r\n        else if (gdzie == \"dol\") {\r\n            clearInterval(interwalek);\r\n            spadlo();\r\n        }\r\n        console.clear();\r\n        console.table(tablica);\r\n    }\r\n    var interwalek = setInterval(function () {\r\n        spadanie(\"dol\");\r\n        y++;\r\n    }, 1000);\r\n    function sprawdzanie_dol() {\r\n        var sprawdzenie_czy_dobrze = 0;\r\n        for (var i = 0; i < klocek.length; i++) {\r\n            for (var j = 0; j < klocek[i].length; j++) {\r\n                if (klocek[i][j] == 1) {\r\n                    // tablica[y + i][x + j] = klocek[i][j]\r\n                    if (tablica[y + i][x + j] == 2) {\r\n                        // console.log('dzieje sie')\r\n                        zmienna = true;\r\n                        sprawdzenie_czy_dobrze++;\r\n                    }\r\n                    else if (tablica[y + i][x + j] == 'x') {\r\n                        zmienna = true;\r\n                        sprawdzenie_czy_dobrze++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return (sprawdzenie_czy_dobrze == 0);\r\n    }\r\n    function sprawdzanie_lewo() {\r\n        var sprawdzenie_czy_dobrze = 0;\r\n        for (var i = 0; i < klocek.length; i++) {\r\n            for (var j = 0; j < klocek[i].length; j++) {\r\n                if (klocek[i][j] == 1) {\r\n                    // tablica[y + i][x + j] = klocek[i][j]\r\n                    if (tablica[y + i][x - 1 + j] == 2) {\r\n                        // console.log('dzieje sie')\r\n                        sprawdzenie_czy_dobrze++;\r\n                    }\r\n                    else if (tablica[y + i][x - 1 + j] == 'x') {\r\n                        sprawdzenie_czy_dobrze++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return (sprawdzenie_czy_dobrze == 0);\r\n    }\r\n    function sprawdzanie_prawo() {\r\n        var sprawdzenie_czy_dobrze = 0;\r\n        for (var i = 0; i < klocek.length; i++) {\r\n            for (var j = 0; j < klocek[i].length; j++) {\r\n                if (klocek[i][j] == 1) {\r\n                    // tablica[y + i][x + j] = klocek[i][j]\r\n                    if (tablica[y + i][x + 1 + j] == 2) {\r\n                        // console.log('dzieje sie')\r\n                        sprawdzenie_czy_dobrze++;\r\n                    }\r\n                    else if (tablica[y + i][x + 1 + j] == 'x') {\r\n                        sprawdzenie_czy_dobrze++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return (sprawdzenie_czy_dobrze == 0);\r\n    }\r\n    document.addEventListener(\"keydown\", klawitura, false);\r\n    function klawitura(e) {\r\n        if (e.key == \"s\") {\r\n            if (!zmienna) {\r\n                spadanie(\"dol\");\r\n                y++;\r\n                // console.log(y)\r\n            }\r\n        }\r\n        else if (e.key == \"a\") {\r\n            if (!lewo) {\r\n                spadanie(\"lewo\");\r\n                x--;\r\n            }\r\n        }\r\n        else if (e.key == \"d\") {\r\n            if (!prawo) {\r\n                spadanie(\"prawo\");\r\n                x++;\r\n                // console.log()\r\n            }\r\n        }\r\n        else if (e.key == \"ArrowLeft\") {\r\n            var oldSymbol = klocek;\r\n            var img = document.getElementById(\"klocuch nowy\");\r\n            console.log(img);\r\n            if (klocek.length == 4) {\r\n                if (klocek[1][0] == 0) {\r\n                    klocek = [\r\n                        [1, 0, 0, 0],\r\n                        [1, 0, 0, 0],\r\n                        [1, 0, 0, 0],\r\n                        [1, 0, 0, 0]\r\n                    ];\r\n                    transform = 'rotate(270deg)';\r\n                    img.style.transform = 'rotate(270deg)';\r\n                    korekta = 37;\r\n                    poziom = poziom - korekta;\r\n                    pion = pion + 2 + korekta;\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else {\r\n                    klocek = [\r\n                        [1, 1, 1, 1],\r\n                        [0, 0, 0, 0],\r\n                        [0, 0, 0, 0],\r\n                        [0, 0, 0, 0]\r\n                    ];\r\n                    korekta = 0;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(0deg)';\r\n                    img.style.transform = 'rotate(0deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n            }\r\n            else if (dodawany == 1 || dodawany == 2 || dodawany == 6) {\r\n                klocek = [\r\n                    [0, 0, 0],\r\n                    [0, 1, 0],\r\n                    [0, 0, 0]\r\n                ];\r\n                if (oldSymbol[0][0] == 1)\r\n                    klocek[0][2] = 1;\r\n                if (oldSymbol[0][2] == 1)\r\n                    klocek[2][2] = 1;\r\n                if (oldSymbol[2][2] == 1)\r\n                    klocek[2][0] = 1;\r\n                if (oldSymbol[2][0] == 1)\r\n                    klocek[0][0] = 1;\r\n                if (oldSymbol[0][1] == 1)\r\n                    klocek[1][2] = 1;\r\n                if (oldSymbol[1][2] == 1)\r\n                    klocek[2][1] = 1;\r\n                if (oldSymbol[2][1] == 1)\r\n                    klocek[1][0] = 1;\r\n                if (oldSymbol[1][0] == 1)\r\n                    klocek[0][1] = 1;\r\n            }\r\n            else if (dodawany == 4) {\r\n                if (klocek[0][1] == 1 && klocek[1][2] == 1) {\r\n                    klocek = [\r\n                        [1, 1, 0],\r\n                        [1, 0, 0],\r\n                        [1, 0, 0],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(270deg)';\r\n                    img.style.transform = 'rotate(270deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[0][1] == 1 && klocek[1][0] == 1) {\r\n                    klocek = [\r\n                        [0, 0, 0],\r\n                        [1, 0, 0],\r\n                        [1, 1, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(180deg)';\r\n                    img.style.transform = 'rotate(180deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[1][0] == 1 && klocek[2][1] == 1) {\r\n                    klocek = [\r\n                        [0, 0, 1],\r\n                        [0, 0, 1],\r\n                        [0, 1, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(90deg)';\r\n                    img.style.transform = 'rotate(90deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else {\r\n                    klocek = [\r\n                        [1, 1, 1],\r\n                        [0, 0, 1],\r\n                        [0, 0, 0],\r\n                    ];\r\n                    korekta = 0;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(0deg)';\r\n                    img.style.transform = 'rotate(0deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n            }\r\n            else if (dodawany == 7) {\r\n                if (klocek[0][1] == 1 && klocek[1][0] == 1) {\r\n                    klocek = [\r\n                        [1, 0, 0],\r\n                        [1, 0, 0],\r\n                        [1, 1, 0],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(90deg)';\r\n                    img.style.transform = 'rotate(90deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[1][0] == 1 && klocek[2][1] == 1) {\r\n                    klocek = [\r\n                        [0, 0, 0],\r\n                        [0, 0, 1],\r\n                        [1, 1, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(180deg)';\r\n                    img.style.transform = 'rotate(180deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[1][2] == 1 && klocek[2][1] == 1) {\r\n                    klocek = [\r\n                        [0, 1, 1],\r\n                        [0, 0, 1],\r\n                        [0, 0, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(270deg)';\r\n                    img.style.transform = 'rotate(270deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else {\r\n                    klocek = [\r\n                        [1, 1, 1],\r\n                        [1, 0, 0],\r\n                        [0, 0, 0],\r\n                    ];\r\n                    korekta = 0;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(0deg)';\r\n                    img.style.transform = 'rotate(0deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n            }\r\n            var sprawdza_czy_git = false;\r\n            sprawdza_czy_git = sprawdzanie_dol();\r\n            if (!sprawdza_czy_git) {\r\n                klocek = oldSymbol;\r\n            }\r\n            else {\r\n                for (var i = 0; i < tablica.length; i++) {\r\n                    for (var j = 0; j < tablica[0].length; j++) {\r\n                        if (tablica[i][j] == 1) {\r\n                            tablica[i][j] = 0;\r\n                        }\r\n                    }\r\n                }\r\n                for (var i = 0; i < klocek.length; i++) {\r\n                    for (var j = 0; j < klocek[i].length; j++) {\r\n                        if (klocek[i][j] == 1) {\r\n                            tablica[y + i][x + j] = klocek[i][j];\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        else if (e.key == \"ArrowRight\") {\r\n            var oldSymbol = klocek;\r\n            var img = document.getElementById(\"klocuch nowy\");\r\n            img.style.transform = transform;\r\n            if (klocek.length == 4) {\r\n                if (klocek[1][0] == 0) {\r\n                    klocek = [\r\n                        [1, 0, 0, 0],\r\n                        [1, 0, 0, 0],\r\n                        [1, 0, 0, 0],\r\n                        [1, 0, 0, 0]\r\n                    ];\r\n                    transform = 'rotate(270deg)';\r\n                    img.style.transform = 'rotate(270deg)';\r\n                    korekta = 37;\r\n                    poziom = poziom - korekta;\r\n                    pion = pion + 2 + korekta;\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else {\r\n                    klocek = [\r\n                        [1, 1, 1, 1],\r\n                        [0, 0, 0, 0],\r\n                        [0, 0, 0, 0],\r\n                        [0, 0, 0, 0]\r\n                    ];\r\n                    korekta = 0;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(0deg)';\r\n                    img.style.transform = 'rotate(0deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n            }\r\n            else if (dodawany == 1 || dodawany == 2 || dodawany == 6) {\r\n                klocek = [\r\n                    [0, 0, 0],\r\n                    [0, 1, 0],\r\n                    [0, 0, 0]\r\n                ];\r\n                if (oldSymbol[0][0] == 1)\r\n                    klocek[0][2] = 1;\r\n                if (oldSymbol[0][2] == 1)\r\n                    klocek[2][2] = 1;\r\n                if (oldSymbol[2][2] == 1)\r\n                    klocek[2][0] = 1;\r\n                if (oldSymbol[2][0] == 1)\r\n                    klocek[0][0] = 1;\r\n                if (oldSymbol[0][1] == 1)\r\n                    klocek[1][2] = 1;\r\n                if (oldSymbol[1][2] == 1)\r\n                    klocek[2][1] = 1;\r\n                if (oldSymbol[2][1] == 1)\r\n                    klocek[1][0] = 1;\r\n                if (oldSymbol[1][0] == 1)\r\n                    klocek[0][1] = 1;\r\n            }\r\n            else if (dodawany == 4) {\r\n                if (klocek[0][1] == 1 && klocek[1][2] == 1) {\r\n                    klocek = [\r\n                        [1, 1, 0],\r\n                        [1, 0, 0],\r\n                        [1, 0, 0],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(270deg)';\r\n                    img.style.transform = 'rotate(270deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[0][1] == 1 && klocek[1][0] == 1) {\r\n                    klocek = [\r\n                        [0, 0, 0],\r\n                        [1, 0, 0],\r\n                        [1, 1, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(180deg)';\r\n                    img.style.transform = 'rotate(180deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[1][0] == 1 && klocek[2][1] == 1) {\r\n                    klocek = [\r\n                        [0, 0, 1],\r\n                        [0, 0, 1],\r\n                        [0, 1, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(90deg)';\r\n                    img.style.transform = 'rotate(90deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else {\r\n                    klocek = [\r\n                        [1, 1, 1],\r\n                        [0, 0, 1],\r\n                        [0, 0, 0],\r\n                    ];\r\n                    korekta = 0;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(0deg)';\r\n                    img.style.transform = 'rotate(0deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n            }\r\n            else if (dodawany == 7) {\r\n                if (klocek[0][1] == 1 && klocek[1][0] == 1) {\r\n                    klocek = [\r\n                        [1, 0, 0],\r\n                        [1, 0, 0],\r\n                        [1, 1, 0],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(90deg)';\r\n                    img.style.transform = 'rotate(90deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[1][0] == 1 && klocek[2][1] == 1) {\r\n                    klocek = [\r\n                        [0, 0, 0],\r\n                        [0, 0, 1],\r\n                        [1, 1, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(180deg)';\r\n                    img.style.transform = 'rotate(180deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else if (klocek[1][2] == 1 && klocek[2][1] == 1) {\r\n                    klocek = [\r\n                        [0, 1, 1],\r\n                        [0, 0, 1],\r\n                        [0, 0, 1],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(270deg)';\r\n                    img.style.transform = 'rotate(270deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n                else {\r\n                    klocek = [\r\n                        [1, 1, 1],\r\n                        [1, 0, 0],\r\n                        [0, 0, 0],\r\n                    ];\r\n                    korekta = 37;\r\n                    poziom = poziom + korekta;\r\n                    pion = pion - korekta;\r\n                    transform = 'rotate(0deg)';\r\n                    img.style.transform = 'rotate(0deg)';\r\n                    img.style.top = pion + \"px\";\r\n                    img.style.left = poziom + \"px\";\r\n                }\r\n            }\r\n            var sprawdza_czy_git = false;\r\n            sprawdza_czy_git = sprawdzanie_dol();\r\n            if (!sprawdza_czy_git) {\r\n                klocek = oldSymbol;\r\n            }\r\n            else {\r\n                for (var i = 0; i < tablica.length; i++) {\r\n                    for (var j = 0; j < tablica[0].length; j++) {\r\n                        if (tablica[i][j] == 1) {\r\n                            tablica[i][j] = 0;\r\n                        }\r\n                    }\r\n                }\r\n                for (var i = 0; i < klocek.length; i++) {\r\n                    for (var j = 0; j < klocek[i].length; j++) {\r\n                        if (klocek[i][j] == 1) {\r\n                            tablica[y + i][x + j] = klocek[i][j];\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        console.clear();\r\n        console.table(tablica);\r\n    }\r\n    function spadlo() {\r\n        for (var i = 0; i < klocek.length; i++) {\r\n            for (var j = 0; j < klocek[i].length; j++) {\r\n                if (klocek[i][j] == 1) {\r\n                    tablica[y + i - 1][x + j] = 2;\r\n                }\r\n            }\r\n        }\r\n        punkty += y;\r\n        console.log(\"spaslooo\");\r\n        document.removeEventListener(\"keydown\", klawitura, false);\r\n        setTimeout(function () {\r\n            // console.log(\"trzeba losować\")\r\n            // let klocuch = document.getElementById('klocuch') as HTMLImageElement\r\n            // klocuch.src = './assets/szary' + dodawany + '.png'\r\n            losowanie_nexta();\r\n            zmiennaOdnawiania = 1;\r\n            sprawdzaj_czy_zbito();\r\n            // wszystko_z_klockiem()\r\n        }, 1000);\r\n        var klocuch = document.getElementById(\"klocuch nowy\");\r\n        klocuch.id = \"klocuch\";\r\n        klocuch.className = \"klocuch\";\r\n    }\r\n    function sprawdzaj_czy_zbito() {\r\n        var ile_lini = 0;\r\n        for (var i = 1; i < 23; i++) {\r\n            if (tablica[i][1] == 2)\r\n                if (tablica[i][2] == 2)\r\n                    if (tablica[i][3] == 2)\r\n                        if (tablica[i][4] == 2)\r\n                            if (tablica[i][5] == 2)\r\n                                if (tablica[i][6] == 2)\r\n                                    if (tablica[i][7] == 2)\r\n                                        if (tablica[i][8] == 2)\r\n                                            if (tablica[i][9] == 2)\r\n                                                if (tablica[i][10] == 2) {\r\n                                                    ile_lini++;\r\n                                                    linie++;\r\n                                                }\r\n            if (ile_lini > 0) {\r\n                zbito(ile_lini, i);\r\n            }\r\n        }\r\n        wszystko_z_klockiem();\r\n        var wynik_img = document.getElementById(\"wynik\");\r\n        wynik_img.innerHTML = punkty.toString();\r\n    }\r\n    function zbito(ile_lini, ktora_linia) {\r\n        alert(\"zbito \" + ile_lini);\r\n        for (var i = 1; i < 12; i++) {\r\n            tablica[ktora_linia][i] = 0;\r\n        }\r\n        if (ile_lini == 1) {\r\n            punkty += 100;\r\n        }\r\n        else if (ile_lini == 2) {\r\n            punkty += 400;\r\n        }\r\n        else if (ile_lini == 3) {\r\n            punkty += 900;\r\n        }\r\n        else if (ile_lini == 4) {\r\n            punkty += 2500;\r\n        }\r\n        var wynik_img = document.getElementById(\"wynik\");\r\n        wynik_img.innerHTML = punkty.toString();\r\n        var linie_img = document.getElementById(\"linie\");\r\n        linie_img.innerHTML = linie.toString();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tetris/./src/tetris.ts?");

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