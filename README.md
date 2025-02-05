# React Native: undefined is not an object (evaluating 'this.props.someProp')

This repository demonstrates a common React Native error: attempting to access `this.props` or `this.state` before a component has fully mounted.  The error message usually appears as `undefined is not an object (evaluating 'this.props.someProp')` or a similar variant.  This often occurs when accessing props or state within the `constructor` or the now-deprecated `componentWillMount` lifecycle method.

## Problem

Accessing props and state before the component mounts leads to undefined values, resulting in the error.  This is because React hasn't yet populated the component's props and state at that stage of the lifecycle.

## Solution

The solution involves accessing `this.props` and `this.state` only after the component has mounted, typically within the `componentDidMount` lifecycle method or within the `render` method itself (if the value is needed for rendering).

## How to reproduce the bug

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run the app on a simulator or device.
4. Observe the error message in the console.

## How to fix the bug

Refer to the solution file provided in this repository to see how to use `componentDidMount` to access the props after they are available.