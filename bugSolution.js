```javascript
import React, { Component } from 'react';
import { Text } from 'react-native';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initialize state with a default value
  }

  componentDidMount() {
    console.log(this.props.someProp); // Access props after mount
    if (this.props.initialCount) {
       this.setState({ count: this.props.initialCount });
    }
  }

  render() {
    return (
      <Text>The count is: {this.state.count}</Text>
    );
  }
}

export default MyComponent; 
```