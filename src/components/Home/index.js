import './index.css'

import {Component} from 'react'

class Home extends Component {
  state = {isTrue: false}

  OnLogin = () => {
    this.setState(prev => ({isTrue: !prev.isTrue}))
  }

  render() {
    const {isTrue} = this.state

    const Text = isTrue ? 'Welcome User' : 'Please Login'
    const login = isTrue ? 'Logout' : 'Login'

    return (
      <div className="Main-Container">
        <div className="Content-Container">
          <h1 className="heading">{Text}</h1>
          <button className="Login-btn" type="button" onClick={this.OnLogin}>
            {login}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
