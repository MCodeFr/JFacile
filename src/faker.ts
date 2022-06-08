interface Color {
  name: string;
  code: string;
}

const JColor: Color[] = [
    {name: "brightred", code: "#E74C3C"},
    {name: "soothingpurple", code: "#9B59B6"},
    {name: "skyblue", code: "#5DADE2"},
    {name: "leafygreen", code: "#48C9B0"},
    {name: "sunkissedyellow", code: "#F4D03F"},
    {name: "groovygray", code: "#D7DBDD"}
  ];

  export function JColorRandom(): Color {
    return JColor[Math.floor(Math.random() * JColor.length)];
}

const JExitTest = process.on("exit", (code) => {
    console.log(`Le processuss s'est arrêté avec le code ${code} !`);
  });

export const JExit = () => {
    return(JExitTest)
}

const JUnhandledRejectonTest = () => {
    process.on(
        "unhandledRejection",
        (reaseon, promise) =>
          console.log(
            `/!/ UnhandledRejection/!/\n Raison : ${reaseon}\n`,
            `Promise : ${promise}`
          )
      );
}

export const JUnhandledRejection = () => {
    return(JUnhandledRejectonTest)
}

const JUnCaughtExceptionTest = () => {
    process.on("uncaughtException", (err, origin) => {
        console.log(
          `/!/ Unchaught Exception /!/\nErreur : ${err}`,
          `Origine : ${origin}`
        );
      });
}
export const JUnCaughtException = () => {
    return(JUnCaughtExceptionTest)
}
const JWarningTest = () => {
    process.on("warning", (...args) => console.log(...args));
}
export const JWarning = () => {
    return(JWarningTest)
}
const JDateTest = () => {
  switch (new Date().getDay()) {
    case 1: "On est lundi !"
    break;
    case 2: "On est mardi !"
    break;
    case 3: "On est mercredi !"
    break;
    case 4: "On est jeudi !"
    break;
    case 5: "On est vendredi !"
    break;
    case 6: "On est samedi !"
    break;
    case 7: "On est dimanche !"
  }
}
export const JDate = () => {
  return (JDateTest)
}
const JLogTest = () => {
  console.log()
}
export const JLog = () => {
  return(JLogTest)
}
const JRTest = () => {
  require("");
}
export const JR = () => {
  return(JRTest)
}
const JVarTest = () => {
  var x 
}
export const JVar = () => {
  return (JVarTest)
}