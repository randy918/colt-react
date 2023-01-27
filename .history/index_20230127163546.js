function getNum() {
return r(7);
}

class App extends React.Component {
  render() {
    const num = getNum()
    return (
      <div>
        <Hello 
        to="Ringo" 
        from="Paul" />;
        <Hello 
        to="Gen" 
        from="Skiff" />
      </div>
    );}
}

ReactDOM.render(<App/>, document.getElementById('root'));
