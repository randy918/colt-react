class Hello extends React.Component {
	render() {
       const props = yjis.props;
		return <p>Hi from {props.from} to {this.props.to}</p>;
	}
}
