import React, { useState, useEffect } from 'react'
import Step from './Step'

import 'regenerator-runtime/runtime'

const App = (props) => {
  const [progressBarHeight, setProgressBarHeight] = useState('2rem')
  const [timeIndex, setTimeIndex] = useState(0)

  const initTime = async () => {
    const period5 = 5 * 60 * 1000 / 100
    const period2 = 2 * 60 * 1000 / 100

    for (let i = 0; i < 699; i++) {
      console.log(`loop ${i}`)
      const period = i < 99 ? period5 : period2
      await new Promise(resolve => setTimeout(resolve, period))

      setTimeIndex(i)
    }
  }

  const calcProgressBarHeight = () => (
    `${((window.innerHeight - 85) / 7 - 53) / 10}rem`
  )

  useEffect(() => {
    initTime()
    setProgressBarHeight(calcProgressBarHeight())
  })

  return (
    <div className='container-fluid'>
      <h1>sitback</h1>
      <Step
        label='Stop - 5min'
        timeIndex={timeIndex}
        stepIndex={0}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Increase volume - 2min'
        timeIndex={timeIndex}
        stepIndex={1}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Touch - 2min'
        timeIndex={timeIndex}
        stepIndex={2}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Binky - 2min'
        timeIndex={timeIndex}
        stepIndex={3}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Add rocking - 2min'
        timeIndex={timeIndex}
        stepIndex={4}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='Cuddle - 2min'
        timeIndex={timeIndex}
        stepIndex={5}
        progressBarHeight={progressBarHeight}
      />
      <Step
        label='K, time to feed!'
        timeIndex={timeIndex}
        stepIndex={6}
        progressBarHeight={progressBarHeight}
      />
    </div>
  )
}

export default App
