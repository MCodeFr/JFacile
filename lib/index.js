"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JRejectionHandled = exports.JVar = exports.JR = exports.JUnCaughtException = exports.JWarning = exports.JUnhandledRejection = exports.JExit = exports.JColorArray = void 0;
const faker_1 = require("./faker");
const process_1 = require("./process");
Object.defineProperty(exports, "JExit", { enumerable: true, get: function () { return process_1.JExit; } });
const process_2 = require("./process");
Object.defineProperty(exports, "JUnhandledRejection", { enumerable: true, get: function () { return process_2.JUnhandledRejection; } });
const process_3 = require("./process");
Object.defineProperty(exports, "JWarning", { enumerable: true, get: function () { return process_3.JWarning; } });
const process_4 = require("./process");
Object.defineProperty(exports, "JUnCaughtException", { enumerable: true, get: function () { return process_4.JUnCaughtException; } });
const faker_2 = require("./faker");
const faker_3 = require("./faker");
Object.defineProperty(exports, "JR", { enumerable: true, get: function () { return faker_3.JR; } });
const faker_4 = require("./faker");
const faker_5 = require("./faker");
Object.defineProperty(exports, "JVar", { enumerable: true, get: function () { return faker_5.JVar; } });
const process_5 = require("./process");
Object.defineProperty(exports, "JRejectionHandled", { enumerable: true, get: function () { return process_5.JRejectionHandled; } });
const faker_6 = require("./faker");
Object.defineProperty(exports, "JColorArray", { enumerable: true, get: function () { return faker_6.JColorArray; } });
exports = {
    get JColorRandom() { return (0, faker_1.JColorRandom)(); },
    get JDate() { return (0, faker_2.JDate)(); },
    get JLog() { return faker_4.JLog; }
};
