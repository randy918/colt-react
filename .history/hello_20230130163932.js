class Hello extends React.Component {
	render() {
        console.log(this.props);
		return <p>Hi from {this.propfrom} to {this.propto}</p>;
	}
}
