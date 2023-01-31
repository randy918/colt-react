function getSlots() {

return slotItems[r(4)];

}

class App extends React.Component {
	render() {
        const slotItems = [♠️, ❤️, ♣️, ♦️];
        const sTitle = "Slot Machines!";
        const s1 = getSlots();
        const s2 = getSlots();
        const s3 = getSlots();
		return (
			<div>
				p
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));