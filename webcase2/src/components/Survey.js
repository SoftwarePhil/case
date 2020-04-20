import React from 'react';
import SurveySection from './SurveySection';

export default class Survey extends React.Component {
  state = {
    stateName: undefined,
    cityName: undefined,
    schoolName: undefined,
    grade: undefined,
    error: undefined,
    gradeOptions: [],
    stateOptions: [],
    conflictQuestions: [],
    conflictAnswers: [],
    angerQuestions: [],
    angerAnswers: [],
    seQuestions: [],
    seAnswers: [],
    showBasicInfo: false,
    showConflictQuestions: true,
    showAngerQuestions: false,
    showSEQuestions: false,
    showQuestionsCount: 1,
  };
  componentDidMount() {
    fetch('case_prod/survey')
    .then(res => res.json())
    .then(result => {

      const conflict = [];
      const anger = [];
      const se = [];
      let gradeOptions = [];
      let stateOptions = [];
      result.survey.map(object => {
        if(object.id === 'grade') {
          gradeOptions = object.data;
        }
        if(object.id === 'state') {
          stateOptions = object.data;
        }
        switch(object.label) {
          case 'anger':
            anger.push({id: object.id, text: object.data});
            break;
          case 'conflict':
            conflict.push({id: object.id, text: object.data});
            break;
          case 'self esteem':
            se.push({id: object.id, text: object.data});
            break;
        }
      }); 
      this.setState(() => ({
        conflictQuestions: conflict,
        angerQuestions: anger, 
        seQuestions: se,
        gradeOptions,
        stateOptions
      }));
    });
  };
  handleGradeButtonClick = (e) => {
    e.preventDefault();
    const grade = e.target.value;
    this.setState(() => ({
      grade: grade
    }));
  };
  handleConflictQuestionSubmit = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    this.setState((prevState) => ({
      conflictAnswers: prevState.conflictAnswers.concat(answer),
      showQuestionsCount: prevState.showQuestionsCount + 1
    }));
  };
  handleAngerQuestionSubmit = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    this.setState((prevState) => ({
      angerAnswers: prevState.angerAnswers.concat(answer),
      showQuestionsCount: prevState.showQuestionsCount + 1
    }));
  };
  handleSEQuestionSubmit = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    this.setState((prevState) => ({
      seAnswers: prevState.seAnswers.concat(answer),
      showQuestionsCount: prevState.showQuestionsCount + 1
    }));

  };
  handleInfoSectionSubmit = (e) => {
    e.preventDefault();
    if(document.getElementById("state").value && document.getElementById("city").value && document.getElementById("school").value && this.state.grade) {
      this.setState(() => ({
        stateName: document.getElementById("state").value,
        cityName: document.getElementById("city").value,
        schoolName: document.getElementById("school").value,
        showBasicInfo: false,
        showConflictQuestions: true

      }));
    } else {
      this.setState(() => ({
        error: 'All fields are required. Please fill them out.'
      }));
    }
  }
  handleConflictSectionSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({
      showQuestionsCount: 1,
      showConflictQuestions: false,
      showAngerQuestions: true
    }));
  }
  handleAngerSectionSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({
      showQuestionsCount: 1,
      showAngerQuestions: false,
      showSEQuestions: true
    }));
  }
  handleSESectionSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({
      showQuestionsCount: 1,
      showSEQuestions: false,
    }));
    this.props.switchDisplay(this.state.conflictAnswers, this.state.angerAnswers, this.state.seAnswers);
  }
  render() {
    return (
      <div className="questions-container m-auto py-3 px-5">
        {this.state.showBasicInfo && <div className="w-100">
          <p className="error">{this.state.error}</p>
          <p>1. What state do you live in?</p>
          <select id="state">
            <option></option>
            {this.state.stateOptions.map(state => (<option key={state} value={state}>{state}</option>))}
          </select>
          <p>2. What city do you live in?</p>
          <input type="text" id="city"></input>
          <p>3. What is the name of your school?</p>
          <input type="text" id="school"></input>
          <p>4. What grade are you in?</p>
          <div className="grade-buttons m-auto pb-5">
            {this.state.gradeOptions.map(grade => (
              <button 
                key={grade}
                value={grade}
                className={grade === this.state.grade ? "selected-grade mr-3" : "grades mr-3"}
                onClick={this.handleGradeButtonClick}
              >
                {grade}
              </button>
            ))}
          </div>
          <div className="d-flex button">
            <button className="btn" onClick={this.handleInfoSectionSubmit}>Next</button>
          </div>
        </div>}
        {this.state.showConflictQuestions && 
          <SurveySection 
            questions={this.state.conflictQuestions}
            answers={this.state.conflictAnswers}
            handleQuestionSubmit={this.handleConflictQuestionSubmit}
            handleSubmit={this.handleConflictSectionSubmit}
            showQuestionsCount={this.state.showQuestionsCount}
            title={'Conflict Questions'}
          />
        }
        {this.state.showAngerQuestions && 
          <SurveySection 
            questions={this.state.angerQuestions}
            answers={this.state.angerAnswers}
            handleQuestionSubmit={this.handleAngerQuestionSubmit}
            handleSubmit={this.handleAngerSectionSubmit}
            showQuestionsCount={this.state.showQuestionsCount}
            title={'Anger Questions'}
          />
        }
        {this.state.showSEQuestions && 
          <SurveySection 
            questions={this.state.seQuestions}
            answers={this.state.seAnswers}
            handleQuestionSubmit={this.handleSEQuestionSubmit}
            handleSubmit={this.handleSESectionSubmit}
            showQuestionsCount={this.state.showQuestionsCount}
            title={'Self Esteem Questions'}
          />
        }
      </div>
    );
  }
}