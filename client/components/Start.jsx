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
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    this.props.getUserData(this.state)
  }

  render () {
    return (
      <div className='container'>
        <div className="col-md-12">
          <a href="#"><img className="img-responsive logo" src="css/logo2.png"></img></a>
        </div>

        <div className="col-md-12 home">
          <h1 className="heading">First, we need to know a few things:</h1>
          <form onSubmit={this.handleSubmit} className="form">
            <p className="formtext">Name:</p>
            <input type="text" onChange={this.handleChange} name="name"></input>

            <p className="formtext">NCEA Level:</p>
            <select name="level" onChange={this.handleChange}>
              <option name="level" value=""></option>
              <option name="level" value="1">Level 1</option>
              <option name="level" value="2">Level 2</option>
              <option name="level" value="3">Level 3</option>
            </select>

            <p className="formtext">Subject:</p>
            <select name="subject" onChange={this.handleChange}>
              <option name="subject" value=""></option>
              <option name="subject" value="1">English</option>
              <option name="subject" value="2">Maths</option>
              <option name="subject" value="3">Science</option>
            </select>
            {/* <button type="button" className="quizbutton zoom btn">Take Quiz</button> */}
            <div className="col-md-12 buttondiv">

              <Link to='/start/quiz' component={Quiz} onClick={this.handleClick} className="quizbutton zoom btn">Take Quiz</Link>

            </div>

          </form>

        </div>
      </div>

    )
  }
}

export default Start
