function getSlots() {
return slotItems[r(4)];
    }


const slotItems = ["S♠️, ❤️, ♣️, ♦️,];
const sTitle = "Slot Machines!";
const s1 = getSlots();
const s2 = getSlots();
const s3 = getSlots();



class SlotMachine extends React.Component {

  
	render() {
 
		return (
			<div>
				<h1>{sTitle}</h1>
                c("hello")
				<p>{s1} {s2} {s3}</p>
			</div>
		);
	}
}
