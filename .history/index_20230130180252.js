function getSlots() {

return slotItems[r(4)];

}

class App extends React.Component {
	render() {
        const slotItems = [♠️, ❤️, ♣️, ♦️];
        const sTitle = "Slot Machines!";
        const s1 = getSlots();
        const s2 = getSlots();
        const s1 = getSlots();
		return (
			<div>
				<SlotMachine to = "Paul" from = "Ringo"/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));