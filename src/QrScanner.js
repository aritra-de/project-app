import React, {Component} from 'react';
import QrReader from 'react-qr-reader';

class QRScanner extends Component {
  state = {
    result: 'No result yet'
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '45%', height: '45%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default QRScanner;
