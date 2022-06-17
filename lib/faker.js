"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JVar = exports.JR = exports.JLog = exports.JDate = exports.JColorArray = exports.JColorRandom = void 0;
const JColor = [
    { name: "brightred", code: "#E74C3C" },
    { name: "soothingpurple", code: "#9B59B6" },
    { name: "skyblue", code: "#5DADE2" },
    { name: "leafygreen", code: "#48C9B0" },
    { name: "sunkissedyellow", code: "#F4D03F" },
    { name: "groovygray", code: "#D7DBDD" }
];
const JArray = [
    "brightred, #E74C3C",
    "soothingpurple, #9B59B6",
    "skyblue, #5DADE2",
    "leafygreen, #48C9B0",
    "sunkissedyellow, #F4D03F",
    "groovygray, #D7DBDD"
];
function JColorRandom() {
    return JColor[Math.floor(Math.random() * JColor.length)];
}
exports.JColorRandom = JColorRandom;
const JColorArray = () => {
    console.log(JArray);
};
exports.JColorArray = JColorArray;
const JDateTest = () => {
    return (new Date().getDay());
};
const JDate = () => {
    return (JDateTest);
};
exports.JDate = JDate;
const JLogTest = () => {
    return (console.log());
};
function JLog() {
    return (JLogTest);
}
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
