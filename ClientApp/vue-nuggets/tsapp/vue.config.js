export const configureWebpack = {
    module: {
        rules: [
            {
                exclude: /index.html/,
                loader: 'vue-template-loader',
                test: /.html$/,
            },
        ],
    },
};
