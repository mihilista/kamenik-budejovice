import clsx from "clsx";
import React from "react";
import Container from "@/components/container";
import { ContextState, useGlobalContext } from "@/context/global-context";
import { NAV_LINKS } from "@/helpers/links";
import Link from "next/link";

export default function NavMobileMenu() {
    const { burgerMenuActive, setBurgerMenuInactive } = useGlobalContext() as ContextState;

    return (
        <div
            className={clsx('flex lg:hidden fixed top-0 left-0 w-full h-screen bg-white/70 transition-all duration-500', {
                'opacity-100': burgerMenuActive,
                'translate-x-1/2 opacity-0 pointer-events-none': !burgerMenuActive
            })}
        >
            <Container className="flex-1 flex flex-col justify-center items-center gap-10">
                {NAV_LINKS.map((link, index) => (
                    <Link href={link.href}
                        key={`Nav Mobile Link: ${index}`}
                        className="mobile-menu-link"
                        onClick={setBurgerMenuInactive}
                    >
                        {link.label}
                    </Link>
                ))}
            </Container>
        </div>
    )
}