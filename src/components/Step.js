import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import StepLabel from './StepLabel'

const Step = ({ label, step, stepHeight, currentStep, setCurrentStep, childRenderer, setChildRenderer }) => {
  const [now, setNow] = useState(0)
  const [intervalRef, setIntervalRef] = useState(0)

  const minutes = step ? 2 : 5
  const interval = minutes * 600

  useEffect(() => {
    if (intervalRef) {
      window.clearInterval(intervalRef)
      setIntervalRef(0)
    }

    if (currentStep < step) {
      setNow(0)
    } else if (currentStep > step){
      setNow(100)
    } else {
      let i = 0
      const tempIntervalRef = setInterval(() => {
        setNow(i)
        if (i++ == 100) {
          window.clearInterval(intervalRef)
          setCurrentStep(step + 1)
        }
      }, interval)
      setIntervalRef(tempIntervalRef)
    }
  }, [currentStep, childRenderer])

  const restartHere = () => {
    setCurrentStep(step)
    setChildRenderer(prevChildRenderer => !prevChildRenderer)
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
