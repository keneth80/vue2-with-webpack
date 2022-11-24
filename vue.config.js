const {defineConfig} = require('@vue/cli-service');
const webpack = require('webpack');
const resourceRegExp = /^\.\/locale$/;
const contextRegExp = /moment$/;
module.exports = defineConfig({
    transpileDependencies: true,
    // pluginOptions: {
    //     webpackBundleAnalyzer: {
    //         openAnalyzer: false, // 자동으로 open하지 않음
    //         analyzerMode:
    //             'static' /* 분석파일 html 보고서를 dist 폴더에 저장한다  */,
    //         reportFilename: 'bundle-report.html', // 리포트이름
    //     },
    // },
    configureWebpack: {
        plugins: [new webpack.IgnorePlugin({resourceRegExp, contextRegExp})],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendorvue: {
                        test: /[\\/]node_modules[\\/](vue)[\\/]/,
                        name: 'vendor-vue',
                        chunks: 'all'
                    }
                    // vendorvueutil: {
                    //     test: /[\\/]node_modules[\\/](vue-router|vue-i18n|vue-meta|vue-screen)[\\/]/,
                    //     name: 'vendor-vueutil',
                    //     chunks: 'all'
                    // },
                    // vendormoment: {
                    //     test: /[\\/]node_modules[\\/](moment)[\\/]/,
                    //     name: 'vendor-moment',
                    //     chunks: 'all'
                    // },
                    // vendorscdata: {
                    //     test: /[\\/]node_modules[\\/](sc-data)[\\/]/,
                    //     name: 'vendor-scdata',
                    //     chunks: 'all'
                    // }
                }
            }
        }
    },
    chainWebpack: (config) => {
        const IS_VENDOR = /[\\/]node_modules[\\/]/;
        config.optimization.minimize(true).splitChunks({
            chunks: 'all',
            minSize: 1,
            maxSize: 1000000,
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    priority: -10,
                    chunks: 'initial',
                    minChunks: 2,
                    test: IS_VENDOR,
                    enforce: true
                }
            }
        });
        config.resolve.extensions
            .prepend('.tsx')
            .prepend('.ts')
            .prepend('.wasm')
            .prepend('.json')
            .prepend('.vue')
            .prepend('.jsx')
            .prepend('.js')
            .prepend('.mjs');
    }
});
