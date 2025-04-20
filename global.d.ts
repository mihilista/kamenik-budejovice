export { };

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (command: string, type: string, params?: Record<string, any>) => void;
    }
}