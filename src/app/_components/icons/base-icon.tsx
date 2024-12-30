'use client';

import React, { FC } from 'react';

import { SvgIcon } from './icon.types';

export const BaseIcon: FC<SvgIcon> = ({
    color = 'currentColor',
    width = 24,
    height = 24,
    children,
    viewBox = '0 0 24 24',
    strokeWidth = '1.5',
    ...rest
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox={viewBox}
            fill='none'
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeLinejoin='round'
            stroke={`${color}`}
            {...rest}>
            {children}
        </svg>
    );
};

export default BaseIcon;
