function getNum() {
return r(7);
}

class App extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
       <h1>your number is {num}</h1>
      </div>
    );}
}

cre.render(<App/>, document.getElementById('root'));