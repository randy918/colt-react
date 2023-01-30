class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to = "Paul" from = "Ringo"/>
				<Hello to = "Ri" from = "Ringo"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));