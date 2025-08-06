import { LinkProps, NAV_LINKS } from "@/helpers/links";
import Link from "next/link";

export default function NavDesktopMenu() {
    return (
        <div className="flex-1 hidden lg:flex items-center justify-end gap-8">
            {NAV_LINKS.map((link: LinkProps) => (
                <Link href={link.href}
                    key={`Nav Desktop Link: ${link.label}`}
                    className="desktop-menu-link shrink-0"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}