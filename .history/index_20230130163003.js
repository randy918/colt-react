class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<Hello />
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById("root"))