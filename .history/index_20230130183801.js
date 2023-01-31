function getSlots() {

return slotItems[r(4)];

}

class App extends React.Component {
	render() {
        const slotItems = [:spade:, :heart:, :club:, :diamond:];
        const sTitle = "Slot Machines!";
        const s1 = getSlots();
        const s2 = getSlots();
        const s3 = getSlots();
		return (
			<div>
				<h1>{sTitle}</h1>
				<p>{s1}</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));