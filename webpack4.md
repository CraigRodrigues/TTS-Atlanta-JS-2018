# Webpack 4

## What is Webpack

## How Webpack works

### Entry

An entry point indicates which module webpack should use to begin building out its internal dependency graph. After entering the entry point, webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly).

### Output

The output property tells webpack where to emit the bundles it creates and how to name these files, it defaults to ./dist.

### Dependency Graph

> Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application.

> When webpack processes your application, it starts from a list of modules defined on the command line or in its config file. Starting from these entry points, webpack recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often, just one - to be loaded by the browser.

### Loaders and Plugins

Loaders enable webpack to process more than just JavaScript files (webpack itself only understands JavaScript. They give you the ability to leverage webpack's bundling capabilities for all kinds of files by converting them to valid modules that webpack can process.

While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks. Plugins range from bundle optimization and minification all the way to defining environment-like variables. The plugin interface is extremely powerful and can be used to tackle a wide variety of tasks.

### Mode

By setting the mode parameter to either development or production, you can enable webpack's built-in optimizations that correspond with the selected mode.

```javascript
module.exports = {
    mode: 'production'
};
```

## Bundling Our Youtube App

* Create a new branch called "webpack"
* Install webpack and webpack-cli: `npm install -D webpack webpack-cli`
* We'll tweak our directory structure slightly, separating the "source" code (/src) from our "distribution" code (/dist). The "source" code is the code that we'll write and edit. The "distribution" code is the minimized and optimized output of our build process that will eventually be loaded in the browser.

* Create a dist folder and put our index.html in it
* Change our index.html to point to bundle.js inside list instead of app.js
* Run `npx webpack` in the terminal
* Open `index.html` and it should work just fine again
* Take a minute to look at the bundled code!

## Webpack Modules

* How webpack transpiles import/export code
* Other ways to do “modules” (Node, ES6 Modules, CommonJS)

## Using a Configuration File

* Create webpack.config.js
* Input all the code to have the output create a bundle.js file in dist

```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

* Run npx webpack —config webpack.config.js (Note that npx webpack will automatically use the webpack.config.js file)
* Let’s add an npm script to run webpack

```JSON
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
    }
```

* `npm run build`

## Asset Management

### Loading CSS

* `npm install -D style-loader css-loader`
* Add to webpack config

```javascript
module: {
    rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
}
```

* Move css file to our src folder
* `npm run build`
* You can also have webpack load in files, fonts, html etc
* HTML webpack plugin is another option that will generate an HTML file for you and add the `bundle.js` in a script tag.
* `npm install -D html-webpack-plugin`
* See [here](https://webpack.js.org/plugins/html-webpack-plugin/) for basic usage documentation on HTML Webpack Plugin

```javascript
plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
    })
]
```

## Source Maps

> When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack trace will simply point to bundle.js. This isn't always helpful as you probably want to know exactly which source file the error came from.

> In order to make it easier to track down errors and warnings, JavaScript offers source maps, which maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

[https://webpack.js.org/guides/development/#using-source-maps](https://webpack.js.org/guides/development/#using-source-maps)

## Webpack —watch and Webpack Dev Server

### Watch

> You can instruct webpack to "watch" all files within your dependency graph for changes. If one of these files is updated, the code will be recompiled so you don't have to run the full build manually.

* Add an npm script to your `package.json` file that runs `webpack --watch`

* You can now run `npm run watch` from the command line to see that webpack compiles your code, but doesn't exit to the command line. This is because the script is still watching your files.

## Uglify and Minify