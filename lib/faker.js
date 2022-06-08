"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JVar = exports.JR = exports.JLog = exports.JDate = exports.JWarning = exports.JUnCaughtException = exports.JUnhandledRejection = exports.JExit = exports.JColorRandom = void 0;
const JColor = [
    { name: "brightred", code: "#E74C3C" },
    { name: "soothingpurple", code: "#9B59B6" },
    { name: "skyblue", code: "#5DADE2" },
    { name: "leafygreen", code: "#48C9B0" },
    { name: "sunkissedyellow", code: "#F4D03F" },
    { name: "groovygray", code: "#D7DBDD" }
];
function JColorRandom() {
    return JColor[Math.floor(Math.random() * JColor.length)];
}
exports.JColorRandom = JColorRandom;
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
const JDateTest = () => {
    switch (new Date().getDay()) {
        case 1:
            "On est lundi !";
            break;
        case 2:
            "On est mardi !";
            break;
        case 3:
            "On est mercredi !";
            break;
        case 4:
            "On est jeudi !";
            break;
        case 5:
            "On est vendredi !";
            break;
        case 6:
            "On est samedi !";
            break;
        case 7: "On est dimanche !";
    }
};
const JDate = () => {
    return (JDateTest);
};
exports.JDate = JDate;
const JLogTest = () => {
    console.log();
};
const JLog = () => {
    return (JLogTest);
};
exports.JLog = JLog;
const JRTest = () => {
    require("");
};
const JR = () => {
    return (JRTest);
};
exports.JR = JR;
const JVarTest = () => {
    var x;
};
const JVar = () => {
    return (JVarTest);
};
exports.JVar = JVar;
