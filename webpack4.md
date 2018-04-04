# Webpack 4

## What is Webpack

## How Webpack works
    * Entry

    An entry point indicates which module webpack should use to begin building out its internal dependency graph. After entering the entry point, webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

    * Output

    The output property tells webpack where to emit the bundles it creates and how to name these files, it defaults to ./dist.


    * Loaders and Plugins

    Loaders enable webpack to process more than just JavaScript files (webpack itself only understands JavaScript. They give you the ability to leverage webpack's bundling capabilities for all kinds of files by converting them to valid modules that webpack can process.

    While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks. Plugins range from bundle optimization and minification all the way to defining environment-like variables. The plugin interface is extremely powerful and can be used to tackle a wide variety of tasks.

    * Mode
    By setting the mode parameter to either development or production, you can enable webpack's built-in optimizations that correspond with the selected mode.

    ```javascript
    module.exports = {
        mode: 'production'
    };
    ```

## Bundling Our Youtube App
    * Init repo
    * Install webpack and webpack-cli
    * Create a dist folder
    * Change our index.html to point to bundle.js inside list instead of app.js
    * Run “npx webpack”
    * Open index.html and it should work just fine again
    * Take a look at the bundle!
## Webpack Modules
    * How webpack transpiles import/export code
    * Other ways to do “modules”
## Using a Configuration File
    * Create webpack.config.js
    * Input all the code to have the output create a bundle.js file in dis
    * Run npx webpack —config webpack.config.js
        * Note that npx webpack will automatically use the webpack.config.js file
    * Let’s add an npm script to run webpack
    * npm run build (“build”: “webpack”)
## Asset Management
    * Loading CSS
    * NPM install style-loader and css-loader
    * Add to webpack config
    * Move css file to our src folder
    * npm run build
    * You can also have webpack load in files, fonts, html etc
    * HTML webpack plugin
## Source Maps
## Webpack —watch and Webpack Dev Server
## Uglify and Minify