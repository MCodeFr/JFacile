/// <reference types="node" />
interface Color {
    name: string;
    code: string;
}
export declare function JColorRandom(): Color;
export declare const JExit: () => NodeJS.Process;
export declare const JUnhandledRejection: () => () => void;
export declare const JUnCaughtException: () => () => void;
export declare const JWarning: () => () => void;
export declare const JDate: () => () => void;
export declare const JLog: () => () => void;
export declare const JR: () => () => void;
export declare const JVar: () => () => void;
export {};
