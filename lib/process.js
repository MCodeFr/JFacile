"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JRejectionHandled = exports.JWarning = exports.JUnCaughtException = exports.JUnhandledRejection = exports.JExit = void 0;
const JExitTest = process.on("exit", (code) => {
    console.log(`Le processuss s'est arrêté avec le code ${code} !`);
});
const JExit = () => {
    return (JExitTest);
};
exports.JExit = JExit;
const JUnhandledRejectonTest = () => {
    process.on("unhandledRejection", (reaseon, promise) => console.log(`/!/ UnhandledRejection/!/\n Raison : ${reaseon}\n`, `Promise : ${promise}`));
};
const JUnhandledRejection = () => {
    return (JUnhandledRejectonTest);
};
exports.JUnhandledRejection = JUnhandledRejection;
const JUnCaughtExceptionTest = () => {
    process.on("uncaughtException", (err, origin) => {
        console.log(`/!/ Unchaught Exception /!/\nErreur : ${err}`, `Origine : ${origin}`);
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
        console.log(`/!/ Rejection Handled Error /!/`);
    });
};
const JRejectionHandled = () => {
    return (JRejectionHandledTest);
};
exports.JRejectionHandled = JRejectionHandled;
