import React from 'react'
import {Link} from 'react-router-dom'

const Quiz = () => {
  return (
    <div className="container">
      <div className="col-md-12">
        <a href="index.html"><img className="img-responsive logo" src="css/logo2.png"></img></a>
      </div>
      <div className="col-md-12 quiz">
        <h1 className="heading">{'level'}{'subject'}</h1>
        <h1 className="heading">{'level'}{'subject'}{'question'}</h1>
        <div className="buttons">
          <br><a href="correct.html" role="button" className="quizbutton btn">Testing to see width of button</a></br>
          <br><a href="incorrect.html" role="button" className="quizbutton btn">Answer 2</a></br>
          <br><a href="incorrect.html" role="button" className="quizbutton btn">Answer 3</a></br>
          <br><a href="incorrect.html" role="button" className="quizbutton btn">Answer 4</a></br>
        </div>
      </div>
    </div>
  )
}

export default Quiz
