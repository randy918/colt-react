class App extends React.Component {
	render() {
        const sTi
		return (
			<div>
				<Hello to = "Paul" from = "Ringo"/>
				<Hello to = "Ringo" from = "Paul"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));