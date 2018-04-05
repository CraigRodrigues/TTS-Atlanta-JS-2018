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

`const element = <h1>Hello, world!</h1>;`

* This is not HTML nor a string...it's JSX!
* JSX is a syntax extension of Javascript
* JSX produces React "elements"
* React does not require JSX, but it is incredibly useful

## Embedding Expressions in JSX

* JSX is similar to ES6 Template Literals which we covered earlier
* You can embed any JS expression in JSX by wrapping it in curly braces
* Below `3 + 3`, `user.firstname` or `formatName(user)` is all valid
* It is recommended you wrap JSX in parenthesis to avoid JS automatic semicolon insertion

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>Hello, {formatName(user)}!</h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

* You can also use JSX inside of `if` and `for` loops.

```javascript
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }

    return <h1>Hello, Stranger.</h1>;
}
```

## Attributes

* To put attribute into your HTML you can use string as literals

`const element = <div tabIndex="0"></div>`

* Or you may use curly braces to put in a JS expression

`const element = <img src={user.avatarURL}></img>`

* Don't put any quotes around the JS curly brace expression
* Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. **For example, class becomes className in JSX, and tabindex becomes tabIndex.**

## Children

* If a JSX tag is empty you can close it immediately with `/>`
* `const element = <img src={user.avatarURL} />`
* JSX tags may also contain children!

```javascript
    const element = (
        <div>
            <h1>Hello!</h1>
            <h2>Good to see you here.</h2>
        </div>
    );
```

## Exercise 02 - Grocery List

* Create a function component with JSX that will render this grocery list to the screen

```text
My Grocery List

1. Eggs
2. Bacon
3. Cheese
4. Biscuits
```

## React Elements

* Elements are the smallest building blocks of React apps.
* An element describes what you want to see on the screen: `const element = <h1>Hello, world</h1>;`
* Unlike browser DOM elements, React elements are **plain objects**, and are cheap to create.
* React DOM takes care of updating the DOM to match the React elements.

## Rendering Elements

* The root DOM node is where everything that React DOM manages will live.
* Usually React apps have a single root DOM node.
* `ReactDOM.render` takes in an element and then the root element.

```javascript
// in our HTML
// <div id="root"></div>

const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById('root'));
```

## Updating the Rendered Element

* React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
* With our knowledge so far, the only way to update the UI is to create a new element, and pass it to `ReactDOM.render()`.

Let's try this ticking clock example:

```javascript
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

* It calls ReactDOM.render() every second from a setInterval() callback.
* NOTE: In practice, most React apps only call `ReactDOM.render()` once. Next time we will learn how such code gets encapsulated into "stateful components".

## React Only Updates Exactly What Is Necessary

* React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
* Let's take a look using the Dev Tools.
* Even though we create an element describing the whole UI tree on every tick, only the text node whose contents has changed gets updated by React DOM.

## Components and Props

* Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
* Components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

## Functional Components

The easiest way to define a component is write a simple JS function:

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

The above two components are equivalent from React’s point of view, however functional components are faster than using the class syntax. We will return to talk about using classes in React later.

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

## Exercise - Grocery List Revisisted

* Let's revisit the grocery list you made earlier.
* Let's try and make that grocery list using a component!
* Create a functional component called `GroceryListItem` and give it some props
* The prop that your function should take is just the name of the item
* Make your App function create the list again, but this time by just using custom components instead of `<li>` React elements

## Extracting Components

* We can always split components into even smaller components
* Let's try and make our grocery list a little better
* We can create a  header for "Grocery List" it's own `<Header />` component as well

```javascript
function GroceryHeader(props) {
    return <h1>{props.title}</h1>;
}

function GroceryItem(props) {
    return <li>{props.item}</li>;
}

const list = (
    <div>
        <GroceryHeader title="My Grocery List!" />
        <ol>
            <GroceryItem item="Eggs" />
            <GroceryItem item="Bacon" />
            <GroceryItem item="Cheese" />
            <GroceryItem item="Biscuits" />
        </ol>
    </div>
)
```

* And then we can create a `GroceryList` component that will in turn render all of our grocery items!

```javascript
function GroceryHeader(props) {
    return <h1>{props.title}</h1>;
}

function GroceryItem(props) {
    return <li>{props.item}</li>;
}

function GroceryList() {
    return (
        <ol>
            <GroceryItem item="Eggs" />
            <GroceryItem item="Bacon" />
            <GroceryItem item="Cheese" />
            <GroceryItem item="Biscuits" />
        </ol>
    )
}

const list = (
    <div>
        <GroceryHeader title="My Grocery List!" />
        <GroceryList />
    </div>
)
```

## Mapping Components

* Now we will map an array to create our components!

```javascript
function GroceryList() {
    let list = ['Eggs', 'Bacon', 'Cheese', 'Biscuits'];

    return (
        <ol>
            {list.map((item, i) => <GroceryItem key={i} item={item} />)}
        </ol>
    )
}

const list = (
    <div>
        <GroceryHeader title="My Grocery List!" />
        <GroceryList />
    </div>
)
```

## Props are Read-Only

Be sure to read this! [https://reactjs.org/docs/components-and-props.html#props-are-read-only](https://reactjs.org/docs/components-and-props.html#props-are-read-only)