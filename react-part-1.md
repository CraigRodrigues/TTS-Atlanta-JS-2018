# React

## Before We Begin

* We need to install React and React-DOM
* `npm i react react-dom -S` (same as --save, saving to our package.json)
* Then install babel-core, babel-loader, babel-preset-env and babel-preset-react as a dev dependency
* `npm i babel-core babel-loader babel-preset-env babel-preset-react -D`

## Babel

* Will transform the cutting edge code we write into stuff the browser will understand
* babel-core: Transforms your ES6 code into ES5
* babel-loader: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
* babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
* babel-preset-react: Babel preset for all React plugins, for example turning JSX into functions

## Add to package.json

```JSON
"babel": {
  "presets": [
    "env",
    "react",
    "stage-2"
  ]
}
```

## Add to webpack.config.js

```javascript
module: {
    rules: [
        {
            test: /\.(js|jsx|css)$/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
```

## What is React

Now we can finally begin!

React is a JavaScript library for building user interfaces. It focuses on small, reusable components to create a larger UI. The components can all manage their own "state".

## Hello World

1. Clone down the React Starter Repo
1. Run `npm i` to install the dependencies
1. In `index.js` put in the following code:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <hi>Hello, world!</hi>,
  document.getElementById('app')
);
```

Congratulations you've created your first React application.

