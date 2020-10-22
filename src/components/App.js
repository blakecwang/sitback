import React, { useState, useEffect } from 'react'
import Step from './Step'

import 'regenerator-runtime/runtime'

const App = (props) => {
  const [step, setStep] = useState(0)
  const [now, setNow] = useState(0)
  const [progressBarHeight, setProgressBarHeight] = useState('2rem')

  const calcNow = (step) => {
    if (step > step) {
      return 100
    } else if (step < step) {
      return 0
    } else {
      return now
    }
  }

  const updateStepAndNow = async () => {
    const period5 = 5 * 60 * 1000 / 100
    const period2 = 2 * 60 * 1000 / 100

    for (let i = 0; i < 699; i++) {
      const period = i < 99 ? period5 : period2
      const step = ~~(i / 100)
      const now = i % 100

      await new Promise(resolve => setTimeout(resolve, period))
      setState(() => ({ step, now }))
    }
  }

  const calcProgressBarHeight = () => (
    `${((window.innerHeight - 85) / 7 - 53) / 10}rem`
  )

  useEffect(() => {
    const newHeight = calcProgressBarHeight()
    setProgressBarHeight(newHeight)
    updateStepAndNow()
  })

  return (
    <div className='container-fluid'>
      <h1>sitback</h1>
      <Step
        label='Stop - 5min'
        now={calcNow(0)}
        stepNum={0}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Increase volume - 2min'
        now={calcNow(1)}
        stepNum={1}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Touch - 2min'
        now={calcNow(2)}
        stepNum={2}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Binky - 2min'
        now={calcNow(3)}
        stepNum={3}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Add rocking - 2min'
        now={calcNow(4)}
        stepNum={4}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Cuddle - 2min'
        now={calcNow(5)}
        stepNum={5}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='K, time to feed!'
        now={calcNow(6)}
        stepNum={6}
        progressBarHeight={progressBarHeight}
      />
    </div>
  )
}

export default App
