import React, { Component } from 'react'
import PasswordGenerator from './components/PasswordGenerator';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dofus</h1>
        <PasswordGenerator />
      </div>
    )
  }
}

export default App
