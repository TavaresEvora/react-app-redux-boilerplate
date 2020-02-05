import React from 'react'
import logo from '../logo.svg'
import '../App.css'

function App({ firstAction, firstStateExample }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/App.js</code> and save to reload.
        </p>
        <button onClick={() => firstAction()}>
          Learn React
        </button>
        {firstStateExample > 0 &&
          <h2>
            firstStateExample est vrai
          </h2>
        }
      </header>
    </div>
  )
}

export default App
