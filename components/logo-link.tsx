import { cn, scrollToTop } from "@/helpers/utils";
import Link from "next/link";
import React from "react";
import SvgLogo from "@/components/svg/svg-logo";
import { usePathname } from 'next/navigation';

type LogoLinkProps = {
    className?: string;
}

export default function LogoLink({ className }: LogoLinkProps) {
    const pathname = usePathname();

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            scrollToTop();
        }
    };

    return (
        <Link href="/"
            className={cn('inline-flex', className)}
            onClick={handleLogoClick}
            aria-label="Jít zpět nahoru"
        >
            <SvgLogo />
        </Link>
    )
}