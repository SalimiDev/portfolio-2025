import BaseIcon from '@/components/icons/base-icon';
import type { SvgIconProp } from '@/components/icons/icon.types';

export default function SmartCommIcon(props: SvgIconProp) {
    return (
        <BaseIcon viewBox='0 0 64 43' {...props}>
            <path
                d='M21.216 21.44c0-3.763.991-7.46 2.873-10.719a21.44 21.44 0 0 1 7.847-7.846A21.44 21.44 0 0 0-.224 21.44v21.44h21.44c3.765.006 7.464-.986 10.72-2.875a21.44 21.44 0 0 1-10.72-18.565ZM10.496 30.546a9.11 9.11 0 1 1 0-18.221 9.11 9.11 0 0 1 0 18.22ZM42.666 0a21.44 21.44 0 0 0-10.72 2.875 21.44 21.44 0 0 1 0 37.13A21.44 21.44 0 0 0 64.096 21.44V0h-21.43Zm10.72 30.546a9.11 9.11 0 1 1 0-18.221 9.11 9.11 0 0 1 0 18.22Z'
                fill='url(#smartcomm-gradient)'
            />
            <path
                d='M42.667 21.44a21.44 21.44 0 0 0-10.73-18.565 21.44 21.44 0 0 0 0 37.13A21.44 21.44 0 0 0 42.667 21.44Zm-10.73 9.105a9.11 9.11 0 1 1 0-18.22 9.11 9.11 0 0 1 0 18.22Z'
                fill='white'
            />
            <defs>
                <linearGradient
                    id='smartcomm-gradient'
                    x1='-.224'
                    y1='21.44'
                    x2='64.096'
                    y2='21.44'
                    gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#00AAAD' />
                    <stop offset='.43' stopColor='#00A8B0' />
                    <stop offset='.69' stopColor='#009FB8' />
                    <stop offset='.91' stopColor='#0091C6' />
                    <stop offset='1' stopColor='#0089CF' />
                </linearGradient>
            </defs>
        </BaseIcon>
    );
}
