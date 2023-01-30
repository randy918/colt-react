class Hello extends React.Component {
	render() {
       const props = this.props;
		return <p>Hi from {props.from} to {props.to}</p>;
	}
}
