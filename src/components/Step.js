import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import StepLabel from './StepLabel'

const Step = ({ label, step, stepHeight, currentStep, setCurrentStep }) => {
  const [now, setNow] = useState(0)

  const minutes = step ? 2 : 5
  const interval = minutes * 60000 / 100

  useEffect(() => {
    if (currentStep == step) {
      console.log(`Step ${step} useEffect`)

      let i = 0
      const intervalRef = setInterval(() => {
        setNow(prevNow => prevNow + 1)
        if (++i == 100) {
          window.clearInterval(intervalRef)
          setCurrentStep(step + 1)
        }
      }, interval)
    }
  }, [currentStep])

  return (
    <div>
      <StepLabel label={label} now={now} />
      <div className='row'>
        <div className='col-sm-12'>
          <ProgressBar
            style={{ height: stepHeight }}
            now={now}
            variant={`num-${step}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Step
