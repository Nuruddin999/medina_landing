import {useEffect, useState} from "react";
import {debounce, isMatchBreakpoint} from "@/utils";

export type Platform = 'mobile' | 'desktop';

/**
 * Возвращает строковое наименование текущей платформы устройства на основе ширины экрана
 * @param breakpoint - граница для мобильного разрешения
 * @returns {('mobile'|'desktop')}
 */
export function usePlatform(breakpoint: number | null = null) {
    const isSsrMobile = false;
    const getPlatform = () => (isMatchBreakpoint(breakpoint) ? 'mobile' : 'desktop');

    /**
     * По умолчанию 'desktop', т.к. при SSR window определено только на клиенте.
     */
    const [platform, setPlatform] = useState<Platform>(isSsrMobile ? 'mobile' : 'desktop');

    /**
     * Запускается на клиенте
     */
    useEffect(() => {
        setPlatform(getPlatform());

        /**
         * Объект будет изменяться изнутри функции debounce
         * @type {{timeoutId: undefined|number}}
         */
        const params = { timeoutId: undefined };
        const listener = debounce(() => setPlatform(getPlatform()), 0, false, params);

        window.addEventListener('resize', listener);

        return () => {
            params.timeoutId !== undefined && clearTimeout(params.timeoutId);
            removeEventListener('resize', listener);
        };
    }, []);

    return platform;
}


export const usePlatformMobile = () => usePlatform() === 'mobile';