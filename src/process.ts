const JExitTest = process.on("exit", (code) => {
    console.log(`\x1B[31mExit !\x1B[34m Le procecuss s'est arrêté avec le code ${code}`);
  });

export const JExit = () => {
    return(JExitTest)
}

const JUnhandledRejectonTest = () => {
    process.on(
        "unhandledRejection",
        (reaseon, promise) =>
          console.log(
            `\x1B[31m/!/ UnhandledRejection /!/\x1B[34m \nReason : ${reaseon}\nPromise : ${promise}`
          )
      );
}

export const JUnhandledRejection = () => {
    return(JUnhandledRejectonTest)
}

const JUnCaughtExceptionTest = () => {
    process.on("uncaughtException", (err, origin) => {
        console.log(
          `\x1B[31m/!/ UncaughtException /!/\x1B[34m \nErreur : ${err}\nOrgin : ${origin}`
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
        console.log(`\x1B[31m/!/ RejectionHandled /!/\x1B[34m Erreur !`)
    })
}
export const JRejectionHandled = () => {
    return(JRejectionHandledTest)
}