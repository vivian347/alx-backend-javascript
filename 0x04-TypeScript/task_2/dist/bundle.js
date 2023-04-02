/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a coffee break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to tasks";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary == "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBWUE7SUFBQTtJQWFBLENBQUM7SUFYRywrQkFBWSxHQUFaO1FBQ0ksT0FBTyxtQkFBbUI7SUFDOUIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxPQUFPLHdCQUF3QjtJQUNuQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0ksT0FBTywyQkFBMkIsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7QUFFRDtJQUFBO0lBYUEsQ0FBQztJQVhHLDhCQUFZLEdBQVo7UUFDSSxPQUFPLHVCQUF1QjtJQUNsQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNJLE9BQU8sNEJBQTRCO0lBQ3ZDLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzNDLElBQUcsT0FBTyxNQUFNLElBQUksUUFBUSxJQUFLLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDM0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM1QyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDeEMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQWE7SUFDOUIsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUN2QztTQUFNO1FBQ0gsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN0QztBQUNMLENBQUM7QUFJRCxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUNwQyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDdkIsT0FBTyxlQUFlLENBQUM7S0FDMUI7U0FBTTtRQUNILE9BQU8sa0JBQWtCLENBQUM7S0FDN0I7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIFxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiXG4gICAgfVxuXG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiXG4gICAgfVxuXG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICAgIH1cbn1cblxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIFxuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIlxuICAgIH1cblxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgY29mZmVlIGJyZWFrXCJcbiAgICB9XG5cbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gdGFza3NcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgaWYodHlwZW9mIHNhbGFyeSA9PSBcIm51bWJlclwiICAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICAgIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogYW55KSB7XG4gICAgaWYgKGlzRGlyZWN0b3IoZW1wbG95ZWUpKSB7XG4gICAgICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG4gICAgfVxufVxuXG50eXBlIFN1YmplY3RzID0gXCJIaXN0b3J5XCIgfCBcIk1hdGhcIjtcblxuZnVuY3Rpb24gdGVhY2hDbGFzcyh0b2RheUNsYXNzOiBTdWJqZWN0cykge1xuICAgIGlmICh0b2RheUNsYXNzID09PSBcIk1hdGhcIikge1xuICAgICAgICByZXR1cm4gXCJUZWFjaGluZyBNYXRoXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiVGVhY2hpbmcgSGlzdG9yeVwiO1xuICAgIH1cblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==