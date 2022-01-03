/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ (() => {

const REFERENCES = [ //pathm / alt / text
    "./res/images/burger.jpg", "burger", "Recommended by someone",
    "./res/images/pizza.jpg", "pizza", "Recommended by other someone"
];

function createHome() {
    const HOME = document.createElement("div");
    HOME.classList.add("home");
    
    HOME.appendChild(createRefs());

    return HOME;
}

function createRefs() {
    const REFS_CONTAINER = document.createElement("div");
    REFS_CONTAINER.classList.add("refs-cont");

    for (let index = 0; index < REFERENCES.length; index++) {
        let reference = createSingleReference(index % 2, REFERENCES[0], REFERENCES[1], REFERENCES[2]);
        REFS_CONTAINER.appendChild(reference);
    }

    return REFS_CONTAINER;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}

///Creates single reference. Direction = 0 -> normal / Other -> reverse
function createSingleReference(direction, img, alt, text) {
    const REFERENCE = document.createElement("div");
    REFERENCE.classList.add("reference");
    if (direction == 0) {
        REFERENCE.classList.add("row-container");
    } else {
        REFERENCE.classList.add("reverse-row-container");
    }

    const REF_IMG_CONT = document.createElement("div");
    REF_IMG_CONT.classList.add("ref-image-cont");

    const REF_IMG = document.createElement("img");
    REF_IMG.src = img;
    REF_IMG.alt = alt;

    REF_IMG_CONT.appendChild(REF_IMG);

    const REF_TEXT = createParagraph(text);
    REF_TEXT.classList.add("ref-text");

    REFERENCE.appendChild(REF_IMG_CONT);
    REFERENCE.appendChild(REF_TEXT);

    return REFERENCE;

}

/***/ }),

/***/ "./src/web.js":
/*!********************!*\
  !*** ./src/web.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homepage__WEBPACK_IMPORTED_MODULE_0__);


function createHeader() {
    const HEADER = document.createElement("header");

    const REST_NAME = document.createElement("h1");
    REST_NAME.classList.add("rest-name");
    REST_NAME.textContent = "Cook-O-Rama";

    HEADER.appendChild(REST_NAME);
    //add nav

    return HEADER;
}

function createFooter() {
    const FOOTER = document.createElement("footer");
    FOOTER.classList.add("footer");

    const SOC_NETW_CONTAINER = document.createElement("div");
    SOC_NETW_CONTAINER.classList.add("row-container");

    //ADD 3 sn images

    const COPYRIGHT = document.createElement("div");
    COPYRIGHT.classList.add("copyright");
    COPYRIGHT.textContent = "Copyright © 2022 All rights reserved.";

    FOOTER.appendChild(SOC_NETW_CONTAINER);
    FOOTER.appendChild(COPYRIGHT);

    return FOOTER
}

function createMain() {
    const MAIN = document.createElement("main");
    MAIN.classList.add("main");

    return MAIN;
}

function initializeWeb() {
    const CONTENT = document.getElementsByTagName("body");
    console.log(CONTENT);
    CONTENT[0].appendChild(createHeader());
    CONTENT[0].appendChild(createMain());
    CONTENT[0].appendChild(createFooter());

    //setHome();

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWeb);

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "./src/web.js");


(0,_web__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEaUM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7VUNwRDVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtDOztBQUVsQyxnREFBYSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSRUZFUkVOQ0VTID0gWyAvL3BhdGhtIC8gYWx0IC8gdGV4dFxuICAgIFwiLi9yZXMvaW1hZ2VzL2J1cmdlci5qcGdcIiwgXCJidXJnZXJcIiwgXCJSZWNvbW1lbmRlZCBieSBzb21lb25lXCIsXG4gICAgXCIuL3Jlcy9pbWFnZXMvcGl6emEuanBnXCIsIFwicGl6emFcIiwgXCJSZWNvbW1lbmRlZCBieSBvdGhlciBzb21lb25lXCJcbl07XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgSE9NRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgSE9NRS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICBcbiAgICBIT01FLmFwcGVuZENoaWxkKGNyZWF0ZVJlZnMoKSk7XG5cbiAgICByZXR1cm4gSE9NRTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVmcygpIHtcbiAgICBjb25zdCBSRUZTX0NPTlRBSU5FUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgUkVGU19DT05UQUlORVIuY2xhc3NMaXN0LmFkZChcInJlZnMtY29udFwiKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBSRUZFUkVOQ0VTLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgcmVmZXJlbmNlID0gY3JlYXRlU2luZ2xlUmVmZXJlbmNlKGluZGV4ICUgMiwgUkVGRVJFTkNFU1swXSwgUkVGRVJFTkNFU1sxXSwgUkVGRVJFTkNFU1syXSk7XG4gICAgICAgIFJFRlNfQ09OVEFJTkVSLmFwcGVuZENoaWxkKHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJFRlNfQ09OVEFJTkVSO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gcGFyYWdyYXBoO1xufVxuXG4vLy9DcmVhdGVzIHNpbmdsZSByZWZlcmVuY2UuIERpcmVjdGlvbiA9IDAgLT4gbm9ybWFsIC8gT3RoZXIgLT4gcmV2ZXJzZVxuZnVuY3Rpb24gY3JlYXRlU2luZ2xlUmVmZXJlbmNlKGRpcmVjdGlvbiwgaW1nLCBhbHQsIHRleHQpIHtcbiAgICBjb25zdCBSRUZFUkVOQ0UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFJFRkVSRU5DRS5jbGFzc0xpc3QuYWRkKFwicmVmZXJlbmNlXCIpO1xuICAgIGlmIChkaXJlY3Rpb24gPT0gMCkge1xuICAgICAgICBSRUZFUkVOQ0UuY2xhc3NMaXN0LmFkZChcInJvdy1jb250YWluZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUkVGRVJFTkNFLmNsYXNzTGlzdC5hZGQoXCJyZXZlcnNlLXJvdy1jb250YWluZXJcIik7XG4gICAgfVxuXG4gICAgY29uc3QgUkVGX0lNR19DT05UID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBSRUZfSU1HX0NPTlQuY2xhc3NMaXN0LmFkZChcInJlZi1pbWFnZS1jb250XCIpO1xuXG4gICAgY29uc3QgUkVGX0lNRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgUkVGX0lNRy5zcmMgPSBpbWc7XG4gICAgUkVGX0lNRy5hbHQgPSBhbHQ7XG5cbiAgICBSRUZfSU1HX0NPTlQuYXBwZW5kQ2hpbGQoUkVGX0lNRyk7XG5cbiAgICBjb25zdCBSRUZfVEVYVCA9IGNyZWF0ZVBhcmFncmFwaCh0ZXh0KTtcbiAgICBSRUZfVEVYVC5jbGFzc0xpc3QuYWRkKFwicmVmLXRleHRcIik7XG5cbiAgICBSRUZFUkVOQ0UuYXBwZW5kQ2hpbGQoUkVGX0lNR19DT05UKTtcbiAgICBSRUZFUkVOQ0UuYXBwZW5kQ2hpbGQoUkVGX1RFWFQpO1xuXG4gICAgcmV0dXJuIFJFRkVSRU5DRTtcblxufSIsImltcG9ydCBzZXRIb21lIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBIRUFERVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgUkVTVF9OQU1FID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIFJFU1RfTkFNRS5jbGFzc0xpc3QuYWRkKFwicmVzdC1uYW1lXCIpO1xuICAgIFJFU1RfTkFNRS50ZXh0Q29udGVudCA9IFwiQ29vay1PLVJhbWFcIjtcblxuICAgIEhFQURFUi5hcHBlbmRDaGlsZChSRVNUX05BTUUpO1xuICAgIC8vYWRkIG5hdlxuXG4gICAgcmV0dXJuIEhFQURFUjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IEZPT1RFUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgRk9PVEVSLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCBTT0NfTkVUV19DT05UQUlORVIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFNPQ19ORVRXX0NPTlRBSU5FUi5jbGFzc0xpc3QuYWRkKFwicm93LWNvbnRhaW5lclwiKTtcblxuICAgIC8vQUREIDMgc24gaW1hZ2VzXG5cbiAgICBjb25zdCBDT1BZUklHSFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIENPUFlSSUdIVC5jbGFzc0xpc3QuYWRkKFwiY29weXJpZ2h0XCIpO1xuICAgIENPUFlSSUdIVC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgQWxsIHJpZ2h0cyByZXNlcnZlZC5cIjtcblxuICAgIEZPT1RFUi5hcHBlbmRDaGlsZChTT0NfTkVUV19DT05UQUlORVIpO1xuICAgIEZPT1RFUi5hcHBlbmRDaGlsZChDT1BZUklHSFQpO1xuXG4gICAgcmV0dXJuIEZPT1RFUlxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IE1BSU4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBNQUlOLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgcmV0dXJuIE1BSU47XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWIoKSB7XG4gICAgY29uc3QgQ09OVEVOVCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKTtcbiAgICBjb25zb2xlLmxvZyhDT05URU5UKTtcbiAgICBDT05URU5UWzBdLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBDT05URU5UWzBdLmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgQ09OVEVOVFswXS5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICAvL3NldEhvbWUoKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2ViOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYiBmcm9tIFwiLi93ZWJcIjtcblxuaW5pdGlhbGl6ZVdlYigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==