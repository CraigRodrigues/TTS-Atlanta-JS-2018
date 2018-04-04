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

We need a separate rule to handle our `js` and `jsx` files. This is different than the rules that handle css files!

```javascript
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ 'babel-loader' ]
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

## Exercise 01 - Hello World

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

1. Run `npm start` to being the Webpack Dev Server
1. You should see "Hello World!" on your page!

Congratulations you've created your first React application 🎉

## JSX

## Embedding Expressions in JSX

## Attributes

## Children

## JSX Under the Hood

## Exercise 02 - Grocery List

## React Elements

## Rendering Elements

## Updating the Rendered Element

## React Only Updates Exactly What Is Necessary

## Components and Props

* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
* Components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## Functional Components

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

You can also use a class

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The above two components are equivalent from React’s point of view. We will return to talk about using classes in React later.

## User Defined Components

* Previously, we only encountered React elements that represent DOM tags:

```javascript
const element = <div />;
```

* However, elements can also represent user-defined components:

```javascript
const element = <Welcome name="Craig" />;
```

* When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object. **We call this object “props”.**

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Craig" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

* So what is happening above?
    1. We call `ReactDOM.render()` with the `<Welcome name="Craig" />` element.
    1. React calls the Welcome component with `{name: 'Craig'}` as the props.
    1. Our Welcome component returns a `<h1>Hello, Craig</h1>` element as the result.
    1. React DOM efficiently updates the DOM to match `<h1>Hello, Craig</h1>`. **Note: Always start component names with a capital letter.**
    1. React treats components starting with lowercase letters as DOM tags. For example, `<div />` represents an HTML div tag, but `<Welcome />` represents a component and requires Welcome to be in scope.
    1. Think of a capital JSX tag as invoking a new constructor function: `new Welcome({name: 'Craig'})`