class App extends React.Component {
	render() {
        const slotItems = [♠️, ❤️, ♣️, ♦️];
        const sTitle = "Slot Machines!";
        const s1 = slotItems[r(4)];
        const s2 = slotItems[r(4)];
        const s3 = slotItems[r(4)];

		return (
			<div>
				<Slo to = "Paul" from = "Ringo"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));