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
            <p className="msg text-question my-2 px-3 py-2">{question.text}</p>
            {this.props.answers[index] && <p className="msg text-answer px-3 py-2 my-2">{this.state.answerOptions[this.props.answers[index]-1]}</p>}
          </div>
        ))}
        {this.props.questions.length !== this.props.answers.length && <div className="d-flex">{
          this.state.answerOptions.map((option, index) => (
          <button 
            key={index}
            className="text-answer px-2 py-2 m-1 mt-3" 
            value={index + 1}
            onClick={this.props.handleQuestionSubmit}
            >
              {option}
            </button>
          ))
        }</div>}
        <div className="d-flex mt-3 button">
          {this.props.questions.length === this.props.answers.length &&  <button className="btn" onClick={this.props.handleSubmit}>Next</button>}
        </div>
      </div>
    )
  }
}