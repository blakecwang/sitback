import React from 'react'
import Step from './Step'

import 'regenerator-runtime/runtime'

class App extends React.Component {
  state = {
    step: 0,
    now: 0,
    progressBarHeight: '0'
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

  updateStepAndNow = async () => {
    const period5 = 5 * 60 * 1000 / 100
    const period2 = 2 * 60 * 1000 / 100

    for (let i = 0; i < 699; i++) {
      const period = i < 99 ? period5 : period2
      const step = ~~(i / 100)
      const now = i % 100

      await new Promise(resolve => setTimeout(resolve, period))
      this.setState(() => ({ step, now }))
    }
  }

  setProgressBarHeight = () => {
    this.setState(() => (
      { progressBarHeight: `${((window.innerHeight - 85) / 7 - 53) / 10}rem` }
    ))
  }

  componentDidMount () {
    this.updateStepAndNow()
    this.setProgressBarHeight()
  }

  render () {
    return (
      <div className='container-fluid'>
        <h1>SITBACK</h1>
        <Step
          label='Stop - 5min'
          now={this.calcNow(0)}
          stepNum={0}
          progressBarHeight={this.state.progressBarHeight}
        />
        <Step
          label='Increase volume - 2min'
          now={this.calcNow(1)}
          stepNum={1}
          progressBarHeight={this.state.progressBarHeight}
        />
        <Step
          label='Touch - 2min'
          now={this.calcNow(2)}
          stepNum={2}
          progressBarHeight={this.state.progressBarHeight}
        />
        <Step
          label='Binky - 2min'
          now={this.calcNow(3)}
          stepNum={3}
          progressBarHeight={this.state.progressBarHeight}
        />
        <Step
          label='Add rocking - 2min'
          now={this.calcNow(4)}
          stepNum={4}
          progressBarHeight={this.state.progressBarHeight}
        />
        <Step
          label='Cuddle - 2min'
          now={this.calcNow(5)}
          stepNum={5}
          progressBarHeight={this.state.progressBarHeight}
        />
        <Step
          label='K, time to feed!'
          now={this.calcNow(6)}
          stepNum={6}
          progressBarHeight={this.state.progressBarHeight}
        />
      </div>
    )
  }
}

export default App
