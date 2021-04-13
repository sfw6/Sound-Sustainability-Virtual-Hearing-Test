import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <p>I hate coding</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
