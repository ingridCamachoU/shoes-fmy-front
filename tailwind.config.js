/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                background: {
                    black: 'var(--color-bg-black)',
                    yellow: 'var(--text-yellow)',
                },
                btn: {
                    style: 'var(--color-btn-style)',
                    styleHover: 'var(--color-btn-style-hover)',
                    red: 'var(--color-btn-red)',
                    redHover: 'var(--color-btn-red-hover)',
                    yellow: 'var(--color-btn-yellow)',
                    yellowHover: 'var(--color-btn-yellow-hover)',
                    blue: 'var(--color-btn-blue)',
                    blueHover: 'var(--color-btn-blue-hover)',
                },
            },
            textColor: {
                text: {
                    white: 'var(--text-white)',
                    black: 'var(--text-black)',
                    yellow: 'var(--text-yellow)',
                },
            },
        },
    },
    plugins: [],
};
