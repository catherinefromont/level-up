import React from 'react'
import {Link} from 'react-router-dom'

import Quiz from './Quiz'
import Start from './Start'

class Correct extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {

  //   }
  // }

  render () {
    return (
      <div className="container">
        <div className="col-md-12">
          <a href="index.html"><img className="img-responsive logo" src="css/logo2.png"></img></a>
        </div>
        <div className="col-md-12 home">
          <h1 className="heading">Well Done!</h1>
          <h1 className="heading">*Answer*</h1>
          <h2 className="heading">*Description*</h2>
        </div>
        <div className="buttons">
          <div className="col-md-12 buttondiv"><Link to='/start/quiz' component={Quiz} onClick={this.handleClick} className="quizbutton zoom btn">Next Question</Link></div>
          <div className="col-md-12 buttondiv"><Link to='/start' component={Start} onClick={this.handleClick} className="quizbutton zoom btn">Restart</Link></div>
        </div>

      </div>
    )
  }
}

export default Correct
