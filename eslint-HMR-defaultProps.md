# ESLint, Hot Module Replacement, Default Props and PropTypes

## ESLint

### Installation for a Project

- Install: `$ npm install eslint -D`
- Run the setup configuration: `$ ./node_modules/.bin/eslint --init`
- How you run ESLint on a file: `$ ./node_modules/.bin/eslint yourfile.js`
- The setup will generate an `eslint.rc` configuration file based on your answers
- That file will have `"extends": "eslint:recommended"` in it
- Because of this line, all of the rules ESLint has recommended by default will be turned on which is all you will need for now. See: [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)
- When using React, another plugin will be installed automatically. You need to enable it in your `eslint.rc` like this:
`"extends": ["eslint:recommended", "plugin:react/recommended"]`
- Be sure if you want to see the issues "live" use the [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- You can disable es-lint rules for lines using `//eslint-disable <rule name>`
- Be sure to re-enable, or better yet just follow the damn rules!
- Setup an npm script in your package.json so you can just type `npm run lint` to test all your files

```JSON
    "scripts": {
        "lint": "eslint ."
    }
```

## Hot Module Replacement

- Webpack Dev Server can use this option. It is not enabled for Create React App.
- Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:
    - Retain application state which is lost during a full reload.
    - Save valuable development time by only updating what's changed.
    - Tweak styling faster -- almost comparable to changing styles in the browser's debugger.

## Default Props

You can define default values for your props by assigning to the special `defaultProps` property:

```jsx
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}
```

The `defaultProps` will be used to ensure that `this.props.name` will have a value if it was not specified by the parent component. The propTypes typechecking happens after `defaultProps` are resolved, so typechecking will also apply to the `defaultProps`.

## PropTypes

PropTypes is a separate React library. On npm: [https://www.npmjs.com/package/prop-types](https://www.npmjs.com/package/prop-types)

Installation: `$ npm install -S prop-types`

```javascript
import PropTypes from 'prop-types';
```

As your app grows, you can catch a lot of bugs with typechecking. React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:

```jsx
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }
  
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
```

PropTypes exports a bunch of validators that can be used to make sure the data you receive is valid. In the example above, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.

**For performance reasons, propTypes is only checked in development mode.**

Pros:
- You can easily catch bugs caused by passing data in the wrong data type (e.g.: An object instead of a string)
- Someone that uses your component can see all available props including their desired data type at one place.
- Some code editors support code completion for props, so you can see the available props while typing in the component in a tooltip.

Some PropType examples:

```javascript
static propTypes = {
  email: PropTypes.string,
  age: PropTypes.number,
  worksRemote: PropTypes.bool,
  updateCallback: PropTypes.func
}

// Further types that can be used are:
PropTypes.array,
PropTypes.arrayOf(PropTypes.string),
PropTypes.object,
PropTypes.objectOf(PropTypes.number)

// You can chain any of the above with `isRequired` to make sure a warning is shown if the prop isn't provided.
PropTypes.func.isRequired
```
