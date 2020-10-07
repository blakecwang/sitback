class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div id="title" className="col-sm-12">
          <h1>SITBACK</h1>
        </div>
      </div>
    );
  }
}

class Step extends React.Component {
  render() {
    return (
      <div className="row step">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-1">
              <h3>{this.props.letter}</h3>
            </div>
            <div className="col-sm-11">
              <h3>{this.props.description}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1 block block-left"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block"></div>
            <div className="col-sm-1 block block-right"></div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ProgressBar now={60} />
        <Header />
        <Step letter="S" description="Stop" />
        <Step letter="I" description="Increase volume" />
        <Step letter="T" description="Touch" />
        <Step letter="B" description="Binky" />
        <Step letter="A" description="Add movement" />
        <Step letter="C" description="Cuddle" />
        <Step letter="K" description="Kk, give up!" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//const blocks = document.getElementsByClassName("block");
//for (var i = 0; i < blocks.length; i++) {
//  blocks.item(i).classList.add("filled");
//}
