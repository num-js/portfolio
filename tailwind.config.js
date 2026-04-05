module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#00d4c8',
                background: '#060d18',
                surface: 'rgba(8, 20, 35, 0.75)',
            },
            maxWidth: {
                content: '1200px',
            },
        },
    },
    plugins: [],
}
