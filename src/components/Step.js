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
          <div className='col-md-12'>
            <label className='progress-label'>
              {`${this.props.label} (${this.props.now}%)`}
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ProgressBar
              style={{
                height: this.state.mounted ? `${(window.innerHeight + 65) / 7 - 55}px` : '1rem',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}
              now={this.props.now}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Step
