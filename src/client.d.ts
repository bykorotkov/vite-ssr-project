import {MainPageTypes} from "./types.ts";

export declare global {
    interface Window {
        __SSR_DATA__?: MainPageTypes
    }
}
