# React Part II

## Last Time

* We learned how to setup Webpack
* And how to get started with React
* JSX
* React functional components
* Mapping components

## Refactoring the Clock

* Back to clock example
* Make clock its own components

### Exercise 01

* Extract the Clock as its own component that takes in props of the current Date/Time
* Hint: The current time is made with the Date constructor: `new Date()`

### Exercise 02

* However we want the clock to update itself, not take in a date.
* To do this we need to add "state" to our Clock component.

```javascript
    ReactDOM.render(
    <Clock />,
    document.getElementById('root')
    );
```

* State is like props, but it is private and fully controlled by the component.
* We mentioned before about Class components, now is the time to use them!

## Converting a Function to a Class

1. Create an ES6 class, with the same name, that extends `React.Component`.
1. Add a single empty method to it called `render()`.
1. Move the body of the function into the `render()` method.
1. Replace props with this.props in the `render()` body.
1. Delete the remaining empty function declaration.

```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## Adding State to a Class

* We will replace `this.props` with `this.state`
* Add a constructor function that calls `super(props)`
* Initialize state with our date

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

## Setting up the timer

