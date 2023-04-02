"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
import { insertRow, updateRow as _updateRow, deleteRow } from "./crud.js";
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
var newRowID = insertRow(row);
var updateRow = __assign(__assign({}, row), { age: 23 });
_updateRow(newRowID, updateRow);
deleteRow(newRowID);
