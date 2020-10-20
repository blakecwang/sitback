import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

class Step extends React.Component {
  state = {
    mounted: false
  }

  componentDidMount () {
    this.setState({ mounted: true })
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-12'>
            <label className='progress-label'>
              {`${this.props.label} (${this.props.now}%)`}
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <ProgressBar
              style={{
                height: this.state.mounted ? `${((window.innerHeight - 85) / 7 - 53) / 10}rem` : '2rem',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}
              now={100}
              variant={`num-${this.props.stepNum}`}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Step
