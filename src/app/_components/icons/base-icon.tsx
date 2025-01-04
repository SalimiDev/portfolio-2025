import React, { FC } from 'react';

import { SvgIconProp } from './icon.types';

export const BaseIcon: FC<SvgIconProp> = ({
    // color = 'currentColor',
    width = 24,
    height = 24,
    children,
    viewBox = '0 0 24 24',
    strokeWidth = '1.5',
    ...rest
}) => {
    return (
        <svg
            className='fill-black dark:fill-white'
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox={viewBox}
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeLinejoin='round'
            // fill={`${color}`}
            // stroke={`${color}`}
            {...rest}>
            {children}
        </svg>
    );
};

export default BaseIcon;
