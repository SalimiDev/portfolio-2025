import BaseIcon from '@/components/icons/base-icon';
import type { SvgIconProp } from '@/components/icons/icon.types';

export default function NobinoIcon(props: SvgIconProp) {
    return (
        <BaseIcon viewBox='689 0 423 450' {...props}>
            <defs>
                <linearGradient
                    id='nobino-dark-gradient'
                    x1='736.91'
                    y1='72.24'
                    x2='961.41'
                    y2='357.16'
                    gradientTransform='matrix(1 0 0 -1 0 452)'
                    gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#3b3a3a' />
                    <stop offset='1' stopColor='#111' />
                </linearGradient>
                <linearGradient
                    id='nobino-red-gradient'
                    x1='801.17'
                    y1='239.27'
                    x2='800.23'
                    y2='39.56'
                    gradientTransform='matrix(1 0 0 -1 0 452)'
                    gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#af191c' />
                    <stop offset='1' stopColor='#e21622' />
                </linearGradient>
                <linearGradient
                    id='nobino-red-gradient-alt'
                    x1='982.44'
                    y1='167.8'
                    x2='1078.62'
                    y2='298.26'
                    href='#nobino-red-gradient'
                />
            </defs>
            <path
                d='M720.14 227.62V113.3c0-63 68.43-102.4 123.18-70.84l99.36 57.16 99.93 57.53c54.56 31.37 54.56 109.75 0 141.12l-99.93 57.53-99.93 57.53c-54.55 31.37-122.61-7.82-122.61-70.56V227.62Z'
                transform='translate(-17.41)'
                fill='url(#nobino-dark-gradient)'
            />
            <path
                d='m828.68 339.48 31.5-213c1.4-9.75 2.9-19.4 5-29.06a82.56 82.56 0 0 0 1.5-24.65c-3.56-38.9-35.15-69.92-74-72.55A80.12 80.12 0 0 0 707 80.27l.86 311.73a56.62 56.62 0 0 0 56.52 56.71C846.3 461 895.23 383.54 895.23 383.54l-1 .56c-31.71 18.74-70.98-8.1-65.55-44.62Z'
                transform='translate(-17.41)'
                fill='url(#nobino-red-gradient)'
            />
            <path
                d='M995.06 102.06s52.67 26.43-28.22 255l121.57-64.3c51.74-27.37 54-100.95 3.94-131.41Z'
                transform='translate(-17.41)'
                fill='url(#nobino-red-gradient-alt)'
            />
            <path
                d='M866.83 53.13c-2.91-4.22-5.53-8.62-8.15-13.12a84.34 84.34 0 0 0-9-12.38 81.33 81.33 0 0 0-66.46-27.46C742.73 2.7 709.83 35.41 707 76a78 78 0 0 0 0 11.44v84.64l4.31-14.16a18.16 18.16 0 0 1 29.81-8L947.63 349a28.6 28.6 0 0 0 34.4 3.94l61.86-37.12Z'
                transform='translate(-17.41)'
                fill='#e21622'
            />
            <path
                d='M940.69 98.87s33.65-15.75 54.37 3.19c0 0 14.62 10.78 15.84 37.49Z'
                transform='translate(-17.41)'
                fill='#af191c'
            />
        </BaseIcon>
    );
}
