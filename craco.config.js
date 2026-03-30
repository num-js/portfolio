module.exports = {
    style: {
        postcss: {
            loaderOptions: (postcssLoaderOptions) => {
                postcssLoaderOptions.postcssOptions = {
                    plugins: [
                        require('tailwindcss'),
                        require('autoprefixer'),
                    ],
                };
                return postcssLoaderOptions;
            },
        },
    },
}
