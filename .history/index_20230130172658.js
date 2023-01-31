class App extends React.Component {
	render() {
        const slotItems = [♠️, ❤️, ♣️, ♦️];
            const s1 = r(slotitems);
		return (
            
			<div>
				<SlotMachine to = "Paul" from = "Ringo"/>
				<Hello to = "Ringo" from = "Paul"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));