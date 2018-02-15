import React from 'react'
import {Link} from 'react-router-dom'

import Correct from './Correct'
import Incorrect from './Incorrect'

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className="container">
        <div className="col-md-12">
          <a href="index.html"><img className="img-responsive logo" src="css/logo2.png"></img></a>
        </div>
        <div className="col-md-12 quiz">
          <h1 className="heading">*Level* *Subject*</h1>
          <h1 className="heading">*Level* *Subject* *Question*</h1>
          <div className="buttons">
            <div className="col-md-12 buttondiv"><Link to='/start/quiz/correct' component={Correct} className="quizbutton zoom btn">Answer 1</Link></div>
            <div className="col-md-12 buttondiv"><Link to='/start/quiz/incorrect' component={Incorrect} className="quizbutton zoom btn">Answer 2</Link></div>
            <div className="col-md-12 buttondiv"><Link to='/start/quiz/incorrect' component={Incorrect} className="quizbutton zoom btn">Answer 3</Link></div>
            <div className="col-md-12 buttondiv"><Link to='/start/quiz/incorrect' component={Incorrect} className="quizbutton zoom btn">Answer 4</Link></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz
