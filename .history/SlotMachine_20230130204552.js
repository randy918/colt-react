
//!  13023.2045          VARIABLES
const slotItems = ["S", "H", "C", "D"];
const sTitle = "Slot Machines!";
const s1 = getSlots();
const s2 = getSlots();
const s3 = getSlots();

//!  13023.2045         FUNCTIONS
function getSlots() {
	return slotItems[r(4) - 1];
}

//!  13023.2045         EXT
class SlotMachine extends React.Component {

  
	render() {
 
		return (
			<div>
				<h1>{sTitle}</h1>
    
				<p>{s1} {s2} {s3}</p>

                <h1>{(s1 === s2) && (s1 === s3) ? "You WIN!" : "You "}</h1>


			</div>
		);
	}
}
