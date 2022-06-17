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
const JRejectionHandledTest = () => {
    process.on("rejectionHandled", () => {
        console.log(`/!/ Rejection Handled Error /!/`)
    })
}
export const JRejectionHandled = () => {
    return(JRejectionHandledTest)
}