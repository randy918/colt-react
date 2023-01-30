class Hello extends React.Component {
	render() {
        console.log(this.props);
		return <p>Hi from {this.from} to {this.to}</p>;
	}
}
