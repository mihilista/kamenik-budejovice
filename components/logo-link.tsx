'use client';

import { cn, scrollToTop } from "@/helpers/utils";
import imageLogo from '@/public/images/logo.png';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";

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
            aria-label={pathname === '/' ? 'Zpět na domovskou stránku' : 'Zpět na začátek stránky'}
        >
            <Image src={imageLogo} alt="Logo Kameník České Budějovice" className="w-full" />
        </Link>
    )
}