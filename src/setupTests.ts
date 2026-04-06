import '@testing-library/jest-dom/vitest';

Object.defineProperty(window, 'scrollTo', {
    value: () => {},
    writable: true,
});

const MockIntersectionObserver = class {
    readonly root: Element | null = null;
    readonly rootMargin = '';
    readonly thresholds: readonly number[] = [];
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords(): IntersectionObserverEntry[] {
        return [];
    }
    unobserve() {}
};

globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
