class App extends React.Component {
	render() {
		return (
			<div>
				<He to = "Paul" from = "Ringo"/>
				<Hello to = "Ringo" from = "Paul"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));