export interface Config {
    authUrl: string;
    applogicUrl: string;
    peatioUrl: string;
    finexUrl: string;
    tablePageLimit: number;
    msAlertDisplayTime: string;
    withCredentials: boolean;
}
export declare const defaultConfig: Config;
export declare const Tower: {
    config: Config;
};
declare global {
    interface Window {
        env: Config;
    }
}
export declare const applogicUrl: () => string;
export declare const authUrl: () => string;
export declare const peatioUrl: () => string;
export declare const finexUrl: () => string;
export declare const msAlertDisplayTime: () => string;
export declare const tablePageLimit: () => number;
export declare const withCredentials: () => boolean;
