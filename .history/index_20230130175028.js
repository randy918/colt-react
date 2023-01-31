class App extends React.Component {
	render() {
        const slotItems = [♠️, ❤️, ♣️, ♦️];
        const sTitle = "Slot Machines!";
        const s1 = slotItems[r(4)];
        const s2 = slotItems[r(4)];
        const s1 = slotItems[r(4)];

		return (
			<div>
				<Hello to = "Paul" from = "Ringo"/>
				<Hello to = "Ringo" from = "Paul"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));