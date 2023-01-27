function getNum() {
return r(7);
}

class App extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <Hello 
       <h1>your number is </h1>
      </div>
    );}
}

ReactDOM.render(<App/>, document.getElementById('root'));
