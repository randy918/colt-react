class App extends React.Component {
	render() {
        const sTitle = "Slot Machines!";
		return (
			<div>
				<Hello to = "Paul" from = "Ringo"/>
				<Hello to = "Ringo" from = "Paul"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));