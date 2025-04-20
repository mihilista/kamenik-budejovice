import {ContextState, useGlobalContext} from "@/context/global-context";
import React from "react";
import clsx from "clsx";

export default function BurgerButton() {
    const {burgerMenuActive, toggleBurgerMenu} = useGlobalContext() as ContextState;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleBurgerMenu();
    }

    return (
        <button
            className="relative w-[24px] h-[18px] lg:hidden border-0 outline-0 z-10"
            aria-label={burgerMenuActive ? 'Zavřít menu' : 'Otevřít menu'}
            onClick={handleClick}
        >
            <div
                className={clsx('burger-menu-line', {
                    'top-0': !burgerMenuActive,
                    'top-1/2 rotate-45 -translate-y-1/2': burgerMenuActive
                })}
            />
            <div
                className={clsx('burger-menu-line top-1/2 -translate-y-1/2', {
                    'opacity-0': burgerMenuActive
                })}
            />
            <div
                className={clsx('burger-menu-line left-1/2', {
                    'bottom-0': !burgerMenuActive,
                    'bottom-1/2 -rotate-45 translate-y-1/2': burgerMenuActive,
                })}
            />
        </button>
    )
}