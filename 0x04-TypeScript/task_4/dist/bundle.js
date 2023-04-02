/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cTeacher": () => (/* binding */ cTeacher),
/* harmony export */   "cpp": () => (/* binding */ cpp),
/* harmony export */   "java": () => (/* binding */ java),
/* harmony export */   "react": () => (/* binding */ react)
/* harmony export */ });
/// <reference path="subjects/Teacher.ts"/>
/// <reference path="subjects/Subject.ts"/>
/// <reference path="subjects/Cpp.ts"/>
/// <reference path="subjects/Java.ts"/>
/// <reference path="subjects/React.ts"/>
var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyx1Q0FBdUM7QUFDdkMsd0NBQXdDO0FBQ3hDLHlDQUF5QztBQUVsQyxJQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMvQixJQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqQyxJQUFNLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVuQyxJQUFNLFFBQVEsR0FBcUI7SUFDdEMsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7SUFDZixtQkFBbUIsRUFBRSxFQUFFO0NBQzFCO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsS0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrXzQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza180L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrXzQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrXzQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrXzQvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInN1YmplY3RzL1RlYWNoZXIudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwic3ViamVjdHMvU3ViamVjdC50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJzdWJqZWN0cy9DcHAudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwic3ViamVjdHMvSmF2YS50c1wiLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJzdWJqZWN0cy9SZWFjdC50c1wiLz5cblxuZXhwb3J0IGNvbnN0IGNwcCA9IG5ldyBTdWJqZWN0cy5DcHAoKTtcbmV4cG9ydCBjb25zdCBqYXZhID0gbmV3IFN1YmplY3RzLkphdmEoKTtcbmV4cG9ydCBjb25zdCByZWFjdCA9IG5ldyBTdWJqZWN0cy5SZWFjdCgpO1xuXG5leHBvcnQgY29uc3QgY1RlYWNoZXI6IFN1YmplY3RzLlRlYWNoZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgIGV4cGVyaWVuY2VUZWFjaGluZ0M6IDEwLFxufVxuXG5jb25zb2xlLmxvZygnQysrJyk7XG5jcHAudGVhY2hlciA9IGNUZWFjaGVyO1xuY29uc29sZS5sb2coY3BwLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGNwcC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpO1xuXG5jb25zb2xlLmxvZygnSmF2YScpO1xuamF2YS50ZWFjaGVyID0gY1RlYWNoZXI7XG5jb25zb2xlLmxvZyhqYXZhLmdldFJlcXVpcmVtZW50cygpKTtcbmNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuY29uc29sZS5sb2coJ1JlYWN0Jyk7XG5yZWFjdC50ZWFjaGVyID0gY1RlYWNoZXI7XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRSZXF1aXJlbWVudHMoKSk7XG5jb25zb2xlLmxvZyhyZWFjdC5nZXRBdmFpbGFibGVUZWFjaGVyKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==