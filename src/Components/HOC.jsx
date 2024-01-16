import React from 'react';

// Higher-Order Component function as a functional component
const withUpperCase = (WrappedComponent) => {
  return function WithUpperCase(props) {
    // Modify props before passing them down to the wrapped component
    const modifiedProps = {
      ...props,
      text: props.text.toUpperCase()
    };

    // Return the wrapped component with modified props
    return <WrappedComponent {...modifiedProps} />;
  };
};

// Component that will be wrapped by the HOC
const MyComponent = (props) => {
  return (
    <div>
      <p>Original Text: {props.text}</p>
    </div>
  );
};

// Use the HOC to create a new component
const MyComponentWithUpperCase = withUpperCase(MyComponent);

// Example usage
const App = () => { 
  return (
    <div>
      <MyComponentWithUpperCase text="hello, world!" />
    </div>
  );
};

export default App;
