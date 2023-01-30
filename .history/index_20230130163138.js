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

ReactDO.render(<App />, document.getElementById("root"));