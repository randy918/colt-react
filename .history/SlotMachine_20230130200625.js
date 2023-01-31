const slotItems = [♠️, ❤️, ♣️, ♦️,];
const sTitle = "Slot Machines!";
        const s1 = getSlots();
        const s2 = getSlots();
        const s3 = getSlots();
 function getSlots() {
return slotItems[r(4)];
    }

class SlotMachine extends React.Component {

  
	render() {
 
		return (
			<div>
				<h1>{sTitle}</h1>
				<p>{s1} {s2} {s3}</p>
			</div>
		);
	}
}
