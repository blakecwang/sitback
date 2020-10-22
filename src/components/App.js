import React, { useState, useEffect } from 'react'
import Step from './Step'

import 'regenerator-runtime/runtime'

const App = () => {
  const [progressBarHeight, setProgressBarHeight] = useState('2rem')

  useEffect(() => {
    setProgressBarHeight(
      `${((window.innerHeight - 85) / 7 - 53) / 10}rem`
    )
  })

  return (
    <div className='container-fluid'>
      <h1>sitback</h1>
      <Step
        label='Stop - 5min'
        stepIndex={0}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Increase volume - 2min'
        stepIndex={1}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Touch - 2min'
        stepIndex={2}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Binky - 2min'
        stepIndex={3}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Add rocking - 2min'
        stepIndex={4}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Cuddle - 2min'
        stepIndex={5}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='K, time to feed!'
        stepIndex={6}
        progressBarHeight={progressBarHeight}
      />
    </div>
  )
}

export default App
