import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {i: 0};
  }
  componentDidMount() {
    setInterval(() => this.setState({i: (this.state.i + 1) % 5}), 500);
  }
  render() {
    return (<h1>{this.props.heading.slice(0, this.state.i)}</h1>);
  }
}

ReactDOM.render(<App heading='Jane'/>, document.getElementById('app'));

