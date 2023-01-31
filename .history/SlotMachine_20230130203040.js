function getSlots() {
return slotItems[r(4) - 1];
    }

const slotItems = ["S", "H", "C", "D"];
const sTitle = "Slot Machines!";
const s1 = getSlots();
const s2 = getSlots();
const s3 = getSlots();



class SlotMachine extends React.Component {

  
	render() {
 
		return (
			<div>
				<h1>{sTitle}</h1>
    
				<p>{s1} {s2} {s3}</p>

                <h1>{(s1 === s2) && (s1 === s3) ? "Y" : sTitle}</h1>


			</div>
		);
	}
}
