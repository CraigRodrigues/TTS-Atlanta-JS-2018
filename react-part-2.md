# React Part II

## Last Time

* We learned how to setup Webpack
* And how to get started with React
* JSX
* React functional components
* Mapping components

## Refactoring the Clock

* Back to clock example

```javascript
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

### Exercise - Extract a Clock Component

* Extract the Clock as its own functional component that takes in props of the current Date/Time
* Hint: The current time is made with the Date constructor: `new Date()`

### Clock Should Update Itself

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

## Lifecycle Methods

* In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.
* We want to **set up a timer** whenever the Clock is rendered to the DOM for the first time. This is called `“mounting”` in React.
* We also want to **clear that timer** whenever the DOM produced by the Clock is removed. This is called `“unmounting”` in React.
* Remember how in our Youtube app how we had to initalize our event handlers and clear our event handlers manually? No more of that!
* We declare some special methods on our component class to runs ome code when the component mounts and unmounts

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {

  }

  componentWillUnmount() {

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
```

* These methods are called `lifecycle hooks`
* `componentDidMount()` hook runs after the component output has been rendered to the DOM. We will setup our timer there.

```javascript
componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
}
```

* While `this.props` is set up by React itself and `this.state` has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).
* We will tear down the timer in the `componentWillUnmount()` lifecycle hook:

```javascript
componentWillUnmount() {
    clearInterval(this.timerID);
}
```

* Finally, we will implement a method called `tick()` that the Clock component will run every second.
* It will use `this.setState()` to schedule updates to the component local state:

```javascript
  tick() {
    this.setState({
      date: new Date()
    });
  }
```

* Every second the browser calls the `tick()` method. Inside it, the Clock component schedules a UI update by calling `setState()` with an object containing the current time.
* **Thanks to the `setState()` call, React knows the state has changed, and calls the `render()` method again to learn what should be on the screen.**
* This time, `this.state.date` in the `render()` method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
* If the Clock component is ever removed from the DOM, React calls the `componentWillUnmount()` lifecycle hook so the timer is stopped.

## Using State

* A few things about `setState()`
* This WILL NOT re-render a component: `this.state.comment = 'Hello';`
* Instead use `setState()`
* Correct way: `this.setState({ greeting: 'Hello' });`
* The ONLY place you assign `this.state` is in the constructor
* React may batch multiple `setState()` calls into a single update for performance.
* Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.
* For example, this code may fail to update the counter:

```javascript
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

* To fix it, use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

```javascript
// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```

## Data Flows Down

* Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.
* This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
* A component may choose to pass its state down as props to its child components:

```javascript
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

* This also works for user-defined components:

```javascript
<FormattedDate date={this.state.date} />
```

* The `FormattedDate` component would receive the date in its `props` and wouldn’t know whether it came from the Clock’s `state`, from the Clock’s `props`, or was typed by hand:

```javascript
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

* This is commonly called a “top-down” or “unidirectional” data flow.
* Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

## Handling Events in React

* Handling events in React is very similar to handling events on DOM elements
* React events are named using camelCase rather than lowercase: `onclick vs onClick`
* With JSX you pass a function as the event handler rather than a string

```javascript
// DOM
<button onclick="activateLasers()">
  Activate Lasers
</button>

// REACT
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

## Synthetic Events

* Take a look at the following example. Here `e` is a synthetic event.

```javascript
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();

    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

* React handles synethic events and with them you don't need to worry about cross-browser compatability.
* When using React you should generally not need to call `addEventListener` to add listeners to a DOM element after it is created. **Instead, just provide a listener when the element is initially rendered.**

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

* You have to be careful with `this` and the context of a function. If not bound `this` will be undefined.
* Can you think of another way to do this without using bind?

```javascript
render() {
    // This syntax ensures `this` is bound within handleClick
    // Arrow function in the callback
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
```

* **The problem here is that a different callback is created each time this Component renders.**
* In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering.
* React generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

## Passing arguments to Event Handlers

```javascript
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```

* We can pass arguments to a bound function as normal. Just make sure it's bound in the constructor while creates a copy of the function!

## Exercise - Up/Down

![React Counter](/images/react-counter.png)

1. Create a `Counter` class component that renders a number and two buttons `+` and `-` that can incremement or decrement the counter. Make it look like the screenshot above.
1. Next change your App so it renders 4 `Counter` components to the page.
1. Add a button that can reset the counter back to zero.

## Conditional Rendering

Consider these two components:

```javascript

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

```

* We’ll create a Greeting component that displays either of these components depending on whether a user is logged in:

```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

## Keys

* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

* The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys:

```javascript
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

* When you don’t have stable IDs for rendered items, you may use the item index as a key as a **last resort**:

```javascript
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

* Keys must only be unique among siblings. They do not need otbe globally unique.

## Lifting State Up

* Often, several components need to reflect the same changing data.
* We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.
* In this section, we will work through the React official documentation tutorial to create a temperature calculator that calculates whether the water would boil at a given temperature.

> There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

## Homework

1. Read this key React article: [Thinking In React](https://reactjs.org/docs/thinking-in-react.html)
1. Clone down the [React Calculator Practice]() repo
1. Remake our vanilla JS calculator, but this time using React
1. **Bonus** Mess around with the [React Developer Tools](https://github.com/facebook/react-devtools)