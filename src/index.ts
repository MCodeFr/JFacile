import { JColorRandom } from "./faker";
import { JExit } from "./process";
import { JUnhandledRejection } from "./process";
import { JWarning } from "./process";
import { JUnCaughtException } from "./process";
import { JDate } from "./faker";
import { JR } from "./faker";
import { JLog } from "./faker";
import { JVar } from "./faker";
import {JRejectionHandled} from "./process"
import {JColorArray} from "./faker"

exports = {
    get JColorRandom() {return JColorRandom()},
    get JDate() {return JDate()},
    get JLog() {return JLog}
}
export {JColorArray} 
export {JExit}
export {JUnhandledRejection}
export {JWarning}
export {JUnCaughtException}
export {JR}
export {JVar} 
export {JRejectionHandled}