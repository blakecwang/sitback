import React from 'react'
import Step from './Step'

import '../styles/styles.scss'

class App extends React.Component {
  state = {
    now: 69
  }

  render () {
    return (
      <div className='container'>
        <Step
          letter='S'
          description='Stop - 5min'
          now={this.state.now}
        />
      </div>
    )
  }
}

export default App
