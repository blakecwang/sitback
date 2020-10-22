import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Step = (props) => {
  const step = ~~(props.timeIndex / 100)
  let now

  if (step < props.stepIndex) {
    now = 0
  } else if (step > props.stepIndex) {
    now = 100
  } else {
    now = props.timeIndex % 100
  }

  return (
    <div>
      <div className='row'>
        <div className='col-sm-12'>
          <label className='progress-label'>
            {`${props.label} (${now}%)`}
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <ProgressBar
            style={{ height: props.progressBarHeight }}
            now={now}
            variant={`num-${props.stepIndex}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Step
