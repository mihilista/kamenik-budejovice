import { cn } from "@/helpers/utils";

export default function Accordion({ active, className, children }: {
    active: boolean;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={cn('accordion', { 'active': active }, className)}>
            {children}
        </div>
    )
}