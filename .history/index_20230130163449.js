class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to = "Paul"/>
				<Hello />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));