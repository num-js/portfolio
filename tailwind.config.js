/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                akronim: ['akronim', 'cursive'],
            },
            colors: {
                page: '#060d18',
                elevated: '#0d1f35',
                primary: '#00d4c8',
                accent: '#00a8e0',
                'header-bar': 'rgba(6, 13, 24, 0.75)',
                surface: 'rgba(8, 20, 35, 0.75)',
                'surface-glass': 'rgba(8, 20, 35, 0.5)',
                'surface-card': 'rgba(8, 20, 35, 0.72)',
                timeline: {
                    rail: '#1a3344',
                    node: '#0f2438',
                    arrow: '#1a3344',
                },
            },
            maxWidth: {
                content: '1200px',
            },
            spacing: {
                header: '70px',
            },
            boxShadow: {
                glass: '0 8px 32px rgba(0, 0, 0, 0.45)',
                card: '-1px 2px 17px -4px rgba(0, 0, 0, 0.45)',
                'primary-glow': '0 0 20px rgba(0, 212, 200, 0.25)',
                'black-deep': 'rgb(0 0 0) 0px 2px 5px 0px, rgb(0 0 0) 0px 2px 10px 0px',
            },
            keyframes: {
                'move-up-down': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(5px)' },
                },
                'glow-spin': {
                    '0%': {
                        transform: 'rotate(0deg)',
                        boxShadow:
                            '0 0 12px rgba(0,212,200,0.25), inset 0 0 12px rgba(0,212,200,0.12)',
                    },
                    '50%': {
                        boxShadow:
                            '0 0 30px rgba(0,212,200,0.25), inset 0 0 25px rgba(0,212,200,0.18)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                        boxShadow:
                            '0 0 12px rgba(0,212,200,0.25), inset 0 0 12px rgba(0,212,200,0.12)',
                    },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                'float-up': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'float-down': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(8px)' },
                },
                'spin-timeline': {
                    from: { transform: 'rotate(0)' },
                    to: { transform: 'rotate(360deg)' },
                },
                'spin-timeline-reverse': {
                    from: { transform: 'rotate(var(--start-angle-of-rotation))' },
                    to: { transform: 'rotate(var(--end-angle-of-rotation))' },
                },
                'fade-move-down': {
                    '0%': { transform: 'translate(0, -10px)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { transform: 'translate(0, 10px)', opacity: '0' },
                },
                'up-down-tech': {
                    '0%, 100%': { transform: 'translateY(-20px)' },
                    '50%': { transform: 'translateY(20px)' },
                },
                'orbit-rotate': {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
            },
            animation: {
                'move-up-down': 'move-up-down 2s linear infinite',
                'glow-spin': 'glow-spin 4s linear infinite',
                float: 'float 6s ease-in-out infinite',
                'float-up': 'float-up 10s ease-in-out infinite',
                'float-down': 'float-down 8s ease-in-out infinite',
                'float-down-slow': 'float-down 9s ease-in-out infinite',
                'spin-timeline': 'spin-timeline var(--animation-time) linear infinite',
                'spin-timeline-reverse':
                    'spin-timeline-reverse var(--animation-time) linear infinite',
                'fade-move-down': 'fade-move-down 2s ease-in-out infinite',
                'up-down-tech': 'up-down-tech 10s linear infinite',
                'orbit-slow': 'orbit-rotate 55s linear infinite',
                'orbit-slow-reverse': 'orbit-rotate 55s linear infinite reverse',
            },
        },
    },
    plugins: [],
};
