import React, { useState, useEffect } from 'react'
import Step from './Step'
import StepLabel from './StepLabel'

const App = () => {
  const [stepHeight, setStepHeight] = useState('2rem')
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    console.log('App useEffect')
    setStepHeight(
      `${((window.innerHeight - 140) / 6 - 53) / 10}rem`
    )
  }, [])

  return (
    <div className='container-fluid'>
      <h1>sitback</h1>
      <Step
        label='Stop - 5min'
        step={0}
        stepHeight={stepHeight}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Step
        label='Increase volume - 2min'
        step={1}
        stepHeight={stepHeight}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Step
        label='Touch - 2min'
        step={2}
        stepHeight={stepHeight}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Step
        label='Binky - 2min'
        step={3}
        stepHeight={stepHeight}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Step
        label='Add rocking - 2min'
        step={4}
        stepHeight={stepHeight}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <Step
        label='Cuddle - 2min'
        step={5}
        stepHeight={stepHeight}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <StepLabel label='K, time to feed!' />
    </div>
  )
}

export default App
