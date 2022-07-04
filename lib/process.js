"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JRejectionHandled = exports.JWarning = exports.JUnCaughtException = exports.JUnhandledRejection = exports.JExit = void 0;
const JExitTest = process.on("exit", (code) => {
    console.log(`\x1B[31mExit !\x1B[34m Le procecuss s'est arrêté avec le code ${code}`);
});
const JExit = () => {
    return (JExitTest);
};
exports.JExit = JExit;
const JUnhandledRejectonTest = () => {
    process.on("unhandledRejection", (reaseon, promise) => console.log(`\x1B[31m/!/ UnhandledRejection /!/\x1B[34m \nReason : ${reaseon}\nPromise : ${promise}`));
};
const JUnhandledRejection = () => {
    return (JUnhandledRejectonTest);
};
exports.JUnhandledRejection = JUnhandledRejection;
const JUnCaughtExceptionTest = () => {
    process.on("uncaughtException", (err, origin) => {
        console.log(`\x1B[31m/!/ UncaughtException /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`);
    });
};
const JUnCaughtException = () => {
    return (JUnCaughtExceptionTest);
};
exports.JUnCaughtException = JUnCaughtException;
const JWarningTest = () => {
    process.on("warning", (...args) => console.log(...args));
};
const JWarning = () => {
    return (JWarningTest);
};
exports.JWarning = JWarning;
const JRejectionHandledTest = () => {
    process.on("rejectionHandled", () => {
        console.log(`\x1B[31m/!/ RejectionHandled /!/\x1B[34m Erreur !`);
    });
};
const JRejectionHandled = () => {
    return (JRejectionHandledTest);
};
exports.JRejectionHandled = JRejectionHandled;
