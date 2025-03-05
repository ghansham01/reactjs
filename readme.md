# React.js Notes

## Introduction to React.js
- React.js is a JavaScript library for building user interfaces.
- It is maintained by Facebook and a community of developers.
- Uses a component-based architecture.
- Efficiently updates and renders components using a virtual DOM.

## Key Features
- **JSX (JavaScript XML):** Syntax extension for JavaScript to write UI elements.
- **Components:** Reusable and independent pieces of UI.
- **Props:** Used to pass data to components.
- **State:** Manages local component data.
- **Hooks:** Functions that let you use state and lifecycle features in functional components.

## Installation
To install React.js using Create React App:
```sh
npx create-react-app my-app
cd my-app
npm start
```

## Components in React
### Functional Component
```jsx
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

### Class Component
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

## State and Props
### Using State in Class Components
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

### Using useState Hook in Functional Components
```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

## React Hooks
### Common Hooks
- **useState:** Manages state in functional components.
- **useEffect:** Handles side effects like API calls.
- **useContext:** Provides global state management.

Example of `useEffect`:
```jsx
import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Time: {time}s</p>;
};
```

## React Router
To install React Router:
```sh
npm install react-router-dom
```
Example of routing:
```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);
```

## Redux (State Management)
- Centralized state management.
- Uses actions, reducers, and store.

Installation:
```sh
npm install redux react-redux
```

Basic example:
```jsx
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    default: return state;
  }
};

const store = createStore(reducer);

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
```

## Conclusion
- React.js is a powerful UI library for building scalable applications.
- Understanding components, state management, hooks, and routing is essential.
- Practice by building small projects to reinforce concepts.
