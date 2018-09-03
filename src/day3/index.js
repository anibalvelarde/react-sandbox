import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

class Room extends React.Component {
  state = {
    isLit: false,
    temp: 72,
    tempType: 'F'
  };

  flipLight = () => {
    this.setState({
      isLit: !this.state.isLit
    });
  };

  on = () => {
    this.setState({
      isLit: true
    });
  };

  off = () => {
    this.setState({
      isLit: false
    });
  };

  tempUp = () => {
    let currentTemp = this.state.temp;
    currentTemp++;
    this.setState({
      temp: currentTemp
    });
  };

  tempDown = () => {
    let currentTemp = this.state.temp;
    currentTemp--;
    this.setState({
      temp: currentTemp
    });
  };

  render() {
    const brightness = this.state.isLit ? 'lit' : 'dark';
    return (
      <div className={`room ${brightness}`}>
        the room is <b />
        {this.state.isLit ? 'lit' : 'dark'}
        <br />
        <button onClick={() => this.flipLight()}>flip</button>
        <br />
        <button onClick={() => this.on()}>ON</button>
        <b />
        <button onClick={() => this.off()}>OFF</button>
        <br />
        <div>
          {`Temperature:   ${this.state.temp}   degrees ${this.state.tempType}`}
        </div>
        <div>
          <button onClick={() => this.tempUp()}>+</button>
          <b />
          <button onClick={() => this.tempDown()}>-</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById('root'));
