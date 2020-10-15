import React from 'react'
import Step from './Step'

import 'regenerator-runtime/runtime'

import '../styles/styles.scss'

class App extends React.Component {
  state = {
    step: 0,
    now: 0
  }

  calcNow = (step) => {
    if (this.state.step > step) {
      return 100
    } else if (this.state.step < step) {
      return 0
    } else {
      return this.state.now
    }
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  updateStepAndNow = async () => {
    const period5 = 0.5 * 60 * 1000 / 100
    const period2 = 0.2 * 60 * 1000 / 100

    for (let i = 0; i < 699; i++) {
      const period = i < 99 ? period5 : period2
      const step = ~~(i / 100)
      const now = i % 100

      await new Promise(resolve => setTimeout(resolve, period))
      this.setState(() => ({ step, now }))
    }
  }

  componentDidMount () {
    this.updateStepAndNow()
  }

  render () {
    return (
      <div className='container'>
        <Step
          label='Stop - 5min'
          now={this.calcNow(0)}
        />
        <Step
          label='Increase volume - 2min'
          now={this.calcNow(1)}
        />
        <Step
          label='Touch - 2min'
          now={this.calcNow(2)}
        />
        <Step
          label='Binky - 2min'
          now={this.calcNow(3)}
        />
        <Step
          label='Add rocking - 2min'
          now={this.calcNow(4)}
        />
        <Step
          label='Cuddle - 2min'
          now={this.calcNow(5)}
        />
        <Step
          label='K, time to feed!'
          now={this.calcNow(6)}
        />
      </div>
    )
  }
}

export default App
