import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import Start from './Start'
import Quiz from './Quiz'
import Correct from './Correct'
import Incorrect from './Incorrect'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      level: '',
      subject: ''
    }
    this.getUserData = this.getUserData.bind(this)
  }

  getUserData () {
    this.setState({
      name: '',
      level: '',
      subject: ''
    })
  }

  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/start' render={() => <Start getUserData={this.getUserData} />} />
          <Route exact path='/start/quiz' component={Quiz} />
          <Route exact path='/start/quiz/correct' component={Correct} />
          <Route exact path='/start/quiz/incorrect' component={Incorrect} />
        </div>
      </Router>
    )
  }
}

export default App
