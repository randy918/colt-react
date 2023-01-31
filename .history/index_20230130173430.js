class App extends React.Component {
	render() {
        const sTitle = "Slot Machines!";
        const 
		return (
			<div>
				<Hello to = "Paul" from = "Ringo"/>
				<Hello to = "Ringo" from = "Paul"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));