import React, { Component } from 'react';

class PasswordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      len: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const { len } = this.state;
    var s = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
    var pwd = '';

    for (var i = 0; i < parseInt(len) + 1; i++) {
      pwd += s[Math.floor((Math.random() * s.length) + 0)];
    }

    this.setState({ password: pwd });
  }

  handleChange(e) {
    this.setState({ len: e.target.value });
  }

  render() {
    const { password } = this.state;
    return (
      <div>
        <h1>{password}</h1>
        <input type="number" onChange={this.handleChange} />
        <button onClick={this.handleClick}>ThisNuts</button>
      </div>
    );
  }
}

export default PasswordGenerator;
