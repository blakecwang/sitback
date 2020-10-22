import React from 'react'

const StepLabel = ({ label, now }) => (
  <div className='row'>
    <div className='col-sm-12'>
      <label className='progress-label'>
        {label} {!!now && `(${now}%)`}
      </label>
    </div>
  </div>
)

export default StepLabel
