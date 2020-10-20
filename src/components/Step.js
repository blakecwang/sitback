import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Step = (props) => (
  <div>
    <div className='row'>
      <div className='col-sm-12'>
        <label className='progress-label'>
          {`${props.label} (${props.now}%)`}
        </label>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-12'>
        <ProgressBar
          style={{ height: props.progressBarHeight }}
          now={props.now}
          variant={`num-${props.stepNum}`}
        />
      </div>
    </div>
  </div>
)

export default Step
