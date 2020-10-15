import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Step = (props) => (
  <div className='row'>
    <div className='col-sm-12'>
      <ProgressBar now={props.now} label={`${props.label} (${props.now}%)`} />
    </div>
  </div>
)

export default Step
