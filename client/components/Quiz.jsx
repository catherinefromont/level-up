import React from 'react'
// import {Link} from 'react-router-dom'

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
          <h1 className="heading">{'level'}{'subject'}</h1>
          <h1 className="heading">{'level'}{'subject'}{'question'}</h1>
          <div className="buttons">
            <a href="correct.html" role="button" className="quizbutton btn">Testing to see width of button</a>
            <a href="incorrect.html" role="button" className="quizbutton btn">Answer 2</a>
            <a href="incorrect.html" role="button" className="quizbutton btn">Answer 3</a>
            <a href="incorrect.html" role="button" className="quizbutton btn">Answer 4</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz
