import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Home from './Home'
import Start from './Start'
import Quiz from './Quiz'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/start' component={Start} />
        <Route path='/start/quiz' component={Quiz} />
      </div>
    </Router>
  )
}

export default App
