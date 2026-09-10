Live Links-->

Surge: https://customer-support-zone1.surge.sh

Netlify: https://customer-support-zone3.netlify.app

Cloudflare: https://customer-support-zone.hafiz-dev24.workers.dev

## 1. What is JSX, and why is it used?

**=>** JSX is a syntax extension for JavaScript that allows to write HTML-like markup inside a JavaScript file.

**JSX is used because:**

1. It allows to keep rendering logic and markup together to ensure that they stay in synchronous with each other on every edit.
2. It allows to manage components in a easier way.
3. JSX makes code easier to read and understand because the markup looks very similar to HTML.
4. It provides more structured code.
5. In JSX, the details which are not related to each other, they are isolated from each other that ensures that changing in one section of the webpage will not affect other section of the webpage.

---

## 2. What is the difference between State and Props?

**=>**

### Props:

1. In React, props (shorts for "properties") are the mechanism for passing data from a parent component to its child components.
2. Props are immutable that means they cannot be changed by the child components.
3. They are used to pass data.
4. Props are set by parent component.

### State:

1. In React, state is component-specific memory to remember things between renders which is declared using useState hook.
2. It is mutable that means it can be updated within the component using setState or useState.
3. State is used to track dynamic data that can change over time.

---

## 3. What is the useState hook, and how does it work?

**=>** In React, useState as well as any other functions starting with "use", is called a Hook. Hooks are special functions that are only available while React is rendering. useState hook is a React Hook that adds a state variable to a component to track data dynamically so that the component can be updated or managed dynamically. useState always returns an array of two elements including current state and a state setter function to update the state.

**Working principle:**

1. When any value is set inside the useState, it is the initial value of the state variable. So when component renders, React remembers the state and useState returns an array of two elements. The first element is the value of the state variable which has the same value as inside the useState and the second element is a state setter function(setState).
2. When setState function is called with new value, it updates the state variable. It tells React to remember the updated value of the state and triggers another render.
3. With re-render, React still sees the initial value which is given in the begining inside the useState, so the latest value of the state variable is supposed to be the value that is inside the useState but React remembers that state variable has been updated with new value so it returns an array of two elements where the first element is the updated value of the state variable and the second element is the state setter function. That's how, state is updated in a React component and that's how useState Hook works.

---

## 4. How can you share state between components in React?

**=>** If components are in a parent-child relationship then we can share the state by passing it from the parent component to the child component through props.

If we want the state of multiple components to change together and components has no direct connection but they are siblings to each other in a common parent then

1. We will remove state from multiple components.
1. We will declare the state in the closet common parent component.
1. Then we will pass the state to the child components via props. We can also pass the state setter function to the child components through props.
1. In this way, multiple components will be able to read and update the same state.

This method is called **"Lifting State Up"** and that is how, we can share state between components in React.

---

## 5. How is event handling done in React?

**=>**

1. First we set an event such as onClick, onSubmit etc. on a JSX element.
2. We can use either a normal function or an arrow function as the event handler.
3. We pass the function inside the event attribute, the function is wraped in curly braces inside the event attribute.
4. If we need to pass an argument to the event handler then we wrap the event handler function in a callback function or an arrow function inside the curly braces of event attribute.
5. When the event is triggered(for example: when the element is clicked), the event handler function is called and the event is handled inside the function.

---
