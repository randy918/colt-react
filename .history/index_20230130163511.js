class App extends React.Component {
	render() {
		return (
			<div>
				<Hello to = "Paul" from = "Ringo"/>
				<Hello to = "Paul" from = "Ringo"/>
				<Hello />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));