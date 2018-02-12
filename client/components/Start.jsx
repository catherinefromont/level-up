import React from 'react'
import {Link} from 'react-router-dom'

import Quiz from './Quiz'

class Start extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      level: '',
      subject: ''
    }
    // this.onChange = this.onChange.bind(this)
  }

  // onChange () {
  //   this.setState({
  //     name:
  //     level:
  //     subject:
  //   })
  // }

  render () {
    return (
      <div className='container'>
        <div className="col-md-12">
          <a href="#"><img className="img-responsive logo" src="css/logo2.png"></img></a>
        </div>

        <div className="col-md-12 home">
          <h1 className="heading">First, we need to know a few things:</h1>
          <form method="POST" action="quiz.html" className="form">
            <p className="formtext">Name:</p>
            <input type="text" name="name"></input>

            <p className="formtext">NCEA Level:</p>
            <select>
              <option name="level" value="0"></option>
              <option name="level" value="1">Level 1</option>
              <option name="level" value="2">Level 2</option>
              <option name="level" value="3">Level 3</option>
            </select>

            <p className="formtext">Subject:</p>
            <select>
              <option name="subject" value="null"></option>
              <option name="subject" value="english">English</option>
              <option name="subject" value="maths">Maths</option>
              <option name="subject" value="science">Science</option>
            </select>
            {/* <button type="button" className="quizbutton zoom btn">Take Quiz</button> */}
            <div className="col-md-12 buttondiv">

              <Link to='/start/quiz' component={Quiz} className="quizbutton zoom btn">Take Quiz</Link>

            </div>

          </form>

        </div>
      </div>

    )
  }
}

export default Start
