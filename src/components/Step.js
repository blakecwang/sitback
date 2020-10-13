import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Step = (props) => (
  <div className='row'>
    <div className='col-sm-1'>{props.letter}</div>
    <div className='col-sm-11'>{props.description}</div>
    <div className='col-sm-12'>
      <ProgressBar now={props.now} label={`${props.now}%`} />
    </div>
  </div>
)

export default Step
