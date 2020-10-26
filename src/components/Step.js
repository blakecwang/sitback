import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import StepLabel from './StepLabel'

const Step = ({ label, step, stepHeight, currentStep, setCurrentStep, triggerRender }) => {
  const [now, setNow] = useState(0)
  const [intervalRef, setIntervalRef] = useState(0)

  const minutes = step ? .2 : .5
  const interval = minutes * 60000 / 100

  useEffect(() => {
    if (intervalRef) {
      console.log(`ref ${intervalRef}`)
      window.clearInterval(intervalRef)
      setIntervalRef(0)
    }

    if (currentStep < step) {
      setNow(0)
    } else if (currentStep > step){
      setNow(100)
    } else {
      let i = 0
      const tempRef = setInterval(() => {
        setNow(i)
        if (i++ == 100) {
          window.clearInterval(intervalRef)
          setCurrentStep(step + 1)
        }
      }, interval)
      setIntervalRef(tempRef)
    }
  }, [currentStep])

  const restartHere = () => {
    setCurrentStep(step)
    triggerRender()
  }

  return (
    <div onClick={restartHere}>
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
