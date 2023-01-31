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
				<h1>{this.sTitle}</h1>
    
				<p>{this.s1} {this.s2} {this.s3}</p>

                <h1>{(this.s1 === this.s2) && (this.s1 === this.s3) ? "You WIN!" : "You Lose..."}</h1>


			</div>
		);
	}
}
