class Hello extends React.Component {
	render() {
        console.log(this.props);
		return <p>Hi from {this.prop.from} to {this.prop.to}</p>;
	}
}
