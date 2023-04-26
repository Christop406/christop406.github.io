/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Poppins"', 'sans-serif'],
                alt: ['"Space Grotesk"', "serif"],
            },
            fontSize: {
                hero: '220px',
            }
        },
    },
    plugins: [],
}
