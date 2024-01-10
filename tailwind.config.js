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
