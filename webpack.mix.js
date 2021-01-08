







const mix = require("laravel-mix");
// const tailwindcss = require("tailwindcss");
// const CKEStyles = require("@ckeditor/ckeditor5-dev-utils").styles;
// const CKERegex = {
//     svg: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
//     css: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
// };
// // require("laravel-mix-vue3");
// // require("laravel-mix-alias");

// /*
//  |--------------------------------------------------------------------------
//  | Mix Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Mix provides a clean, fluent API for defining some Webpack build steps
//  | for your Laravel application. By default, we are compiling the Sass
//  | file for the application as well as bundling up all the JS files.
//  |
//  */

// Mix.listen("configReady", (webpackConfig) => {
//     const rules = webpackConfig.module.rules;
//     const targetSVG = /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/;
//     const targetFont = /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/;
//     const targetCSS = /\.css$/;

//     for (let rule of rules) {
//         if (rule.test.toString() === targetSVG.toString()) {
//             rule.exclude = CKERegex.svg;
//         } else if (rule.test.toString() === targetFont.toString()) {
//             rule.exclude = CKERegex.svg;
//         } else if (rule.test.toString() === targetCSS.toString()) {
//             rule.exclude = CKERegex.css;
//         }
//     }
// });



// mix.sass("resources/js/assets/sass/app.scss", "public/css")
//     .autoload({
//         "cash-dom": ["cash"],
//     })
    
    









/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        
    ])
    .webpackConfig(require('./webpack.config'));
