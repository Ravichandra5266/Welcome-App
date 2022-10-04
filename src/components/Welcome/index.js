// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <button className="btn" type="button" onClick={this.buttonText}>
          {isSubscribed && 'Subscribed'}
          {!isSubscribed && 'Subscribe'}
        </button>
      </div>
    )
  }
}
export default Welcome
