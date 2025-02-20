import {MOBILE_SCREEN} from "@/constants";

export const isMatchBreakpoint = (breakpoint:any) =>
    typeof window !== 'undefined' &&
    window.matchMedia(`(max-width: ${breakpoint || MOBILE_SCREEN}px)`).matches;

export function debounce(func:any, wait:any, immediate:any, paramsObj:any = {}) {
    let timeout:any;

    return function executedFunction() {

        // @ts-ignore
        const context = this;
        const args = arguments;

        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (paramsObj) {
            paramsObj.timeoutId = timeout;
        }

        if (callNow) func.apply(context, args);
    };
}