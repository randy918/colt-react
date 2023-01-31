function getSlots() {
	return slotItems[r(4)];
}

class SlotMachine extends React.Component {
	render() {
		const props = this.props;
		render() {
        const slotItems = [:spade:, :heart:, :club:, :diamond:];
        const sTitle = "Slot Machines!";
        const s1 = getSlots();
        const s2 = getSlots();
        const s3 = getSlots();
		return (
			<div>
				<h1>{sTitle}</h1>
				<p>{s1} {s2} {s3}</p>
			</div>
		);
	}
		);
	}
}
