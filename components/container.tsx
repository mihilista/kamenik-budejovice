import React, { JSX } from 'react';
import { cn } from '@/helpers/utils';

type ContainerProps = {
    as?: keyof JSX.IntrinsicElements;
    narrow?: boolean;
    noPadding?: boolean;
    className?: string;
    children?: React.ReactNode;
    [rest: string]: unknown;
};

export default function Container({
    as: Tag = 'div',
    className,
    children,
    narrow = false,
    ...rest
}: ContainerProps) {
    return (
        <Tag className={cn('w-full mx-auto px-5 md:px-10', {
            'max-w-[1450px]': !narrow,
            'max-w-[980px]': narrow,
        }, className)}
            {...rest}
        >
            {children}
        </Tag>
    );
}