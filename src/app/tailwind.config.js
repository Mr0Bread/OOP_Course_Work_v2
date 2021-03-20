module.exports = {
    purge: ['./src/client/pages/**/*.{js,ts,jsx,tsx}', './src/client/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary-creme': '#EAE7DC',
                'primary-grey': '#8E8D8A',
                'primary-red': '#6F2232',
                'primary-white': '#DFF8EB',
                'primary-black': '#262626'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
