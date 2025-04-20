import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}