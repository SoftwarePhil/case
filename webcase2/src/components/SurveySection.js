import React from 'react';

export default class SurveySection extends React.Component {
  state = {
    answerOptions: ['Never', 'Almost Never', 'Sometimes', 'Almost Always', 'Always']
  }
  render() {
    return (
      <div>
        <h2 className="mb-4">{this.props.title}</h2>
        {this.props.questions.slice(0, this.props.showQuestionsCount).map((question, index) => (
          <div className="d-flex flex-column" key={index}>
            <p className="text-question mx-3 p-1">{question.text}</p>
            {this.props.answers[index] && <p className="text-answer p-1 m-2">{this.state.answerOptions[this.props.answers[index]-1]}</p>}
          </div>
        ))}
        { this.props.questions.length !== this.props.answers.length && <div className="d-flex">{
          this.state.answerOptions.map((option, index) => (
          <button 
            key={index}
            className="text-answer p-1 m-1" 
            value={index + 1}
            onClick={this.props.handleQuestionSubmit}
            >
              {option}
            </button>
          ))
        }</div>}
        <div className="d-flex button">
          {this.props.questions.length === this.props.answers.length &&  <button className="btn" onClick={this.props.handleSubmit}>Next</button>}
        </div>
      </div>
    )
  }
}