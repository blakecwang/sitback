import React, { useState, useEffect } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Step = ({ label, stepIndex, progressBarHeight }) => {
  const [now, setNow] = useState(0)

  const firstStepMinutes = 5
  const otherStepMinutes = 2
  const minutes = stepIndex ? firstStepMinutes : otherStepMinutes
  const timeout = stepIndex ?
    (firstStepMinutes + otherStepMinutes * (stepIndex - 1)) * 60000
    :
    0
  const interval = minutes * 60000 / 100

  useEffect(() => {
    const startProgress = () => {
      let i = 0
      const intervalRef = setInterval(() => {
        setNow(prevNow => prevNow + 1)
        if (++i == 100) {
          clearInterval(intervalRef)
        }
      }, interval)
    }

    setTimeout(startProgress, timeout)
  }, [])

  return (
    <div>
      <div className='row'>
        <div className='col-sm-12'>
          <label className='progress-label'>
            {`${label} (${now}%)`}
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <ProgressBar
            style={{ height: progressBarHeight }}
            now={now}
            variant={`num-${stepIndex}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Step
