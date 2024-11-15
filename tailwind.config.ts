import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import { Config } from 'tailwindcss';

extend([mixPlugin]);

/**
 * Generate a darkened color from the input color.
 * @param input - The input color as a string.
 * @param percentage - The percentage to darken the color. Default is 0.07.
 * @returns The darkened color as a hex string.
 */

export function generateDarkenColorFrom(input: string, percentage = 0.07): string {
    return colord(input).darken(percentage).toHex();
}

/**
 * Generate a foreground color from the input color.
 * @param input - The input color as a string.
 * @param percentage - The percentage to mix the color. Default is 0.8.
 * @returns The mixed color as a hex string.
 */

export function generateForegroundColorFrom(input: string, percentage = 0.8): string {
    return colord(input)
        .mix(colord(input).isDark() ? 'white' : 'black', percentage)
        .toHex();
}

type ColorObject = {
    [key: string]: string;
};

// Define the tailwind color configuration
export const tailwindColors: ColorObject = {
    current: 'currentColor',
    transparent: 'transparent',
    white: '#F9F9F9',
    primary: '#007BEC',
    'primary-content': '#FFFFFF',
    'primary-focus': generateDarkenColorFrom('#007BEC'),
    secondary: '#6c5ce7',
    'secondary-content': '#FFFFFF',
    'secondary-focus': generateDarkenColorFrom('#6c5ce7'),
    accent: '#1FB2A5',
    'accent-content': '#FFFFFF',
    'accent-focus': generateDarkenColorFrom('#1FB2A5'),
    neutral: '#2a323c',
    'neutral-content': generateForegroundColorFrom('#FFFFFF'),
    'neutral-focus': generateDarkenColorFrom('#2a323c', 0.03),
    'base-25': '#353d47',
    'base-50': '#2a323c',
    'base-75': '#20272e',
    'base-100': '#1d232a',
    'base-200': '#191e24',
    'base-300': '#15191e',
    'base-content': '#A6ADBB',
    info: '#3abff8',
    'info-content': generateForegroundColorFrom('#3abff8'),
    success: '#36d399',
    'success-content': generateForegroundColorFrom('#36d399'),
    warning: '#fbbd23',
    'warning-content': generateForegroundColorFrom('#fbbd23'),
    error: '#f87272',
    'error-content': generateForegroundColorFrom('#f87272'),
    'gradient-first': '#34eaa0',
    'gradient-second': '#0fa2e9'
};

// TailwindCSS configuration
const config: Config = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        colors: tailwindColors,
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                lg: '3rem',
                xl: '4rem'
            }
        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/images/tile.svg')"
            }
        }
    },
    darkMode: 'class',
    plugins: []
};
export default config;
