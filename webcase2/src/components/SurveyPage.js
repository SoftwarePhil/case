import React from 'react';
import Survey from './Survey';
import Results from './Results';

export default class SurveyPage extends React.Component {
  state = {
    showQuestions: true,
    showResults: false,
    conflictAnswers: [],
    angerAnswers: [],
    seAnswers: [],
  };
  switchDisplay = (conflict, anger, se) => {

    this.setState(() => ({
      showQuestions: false,
      showResults: true,
      conflictAnswers: conflict,
      angerAnswers: anger,
      seAnswers: se
    }));
  };
  render() {
    return (
      <div className="survey-page p-5">
        { this.state.showQuestions && <div>
          <Survey switchDisplay={this.switchDisplay} />
        </div> }
        { this.state.showResults && <div>
          <Results 
            conflictAnswers={this.state.conflictAnswers}
            angerAnswers={this.state.angerAnswers}
            seAnswers={this.state.seAnswers}
          /> 
        </div> }
      </div>
    );
  }
};
