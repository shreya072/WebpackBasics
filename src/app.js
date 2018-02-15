import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends React.Component {
	render() {
		return (<div>
			<h1>{this.props.title}</h1>
			</div>);
	}
}

export default App;