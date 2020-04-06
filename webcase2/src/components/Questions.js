import React from 'react';

export default class Questions extends React.Component {
  state = {
    stateName: undefined,
    cityName: undefined,
    schoolName: undefined,
    grade: undefined,
    error: undefined,
    answerOptions: ['Never', 'Almost Never', 'Sometimes', 'Almost Always', 'Always'],
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
    showResults: false
  };
  componentDidMount() {
    fetch('/case_prod/survey')
    .then(res => res.json())
    .then(result => {
      console.log(result);
      const conflict = [];
      const anger = [];
      const se = [];
      let gradeOptions = [];
      let stateOptions = [];
      result.survey.map(object => {
        console.log(object);
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
      console.log(this.state);
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
      showResults: true
    }));
    this.props.switchDisplay(this.state.conflictAnswers, this.state.angerAnswers, this.state.seAnswers);
    console.log(this.state);
  }
  render() {
    const conflictQuestions = this.state.conflictQuestions;
    const conflictAnswers = this.state.conflictAnswers;
    const angerQuestions = this.state.angerQuestions;
    const angerAnswers = this.state.angerAnswers;
    const seQuestions = this.state.seQuestions;
    const seAnswers = this.state.seAnswers;
    const answerOptions = this.state.answerOptions;
    return (
      <div className="questions-container m-auto p-3">
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
          <div>
            <button className="btn" onClick={this.handleInfoSectionSubmit}>Next</button>
          </div>
        </div>}
        {this.state.showConflictQuestions && <div>
          {this.state.conflictQuestions.slice(0, this.state.showQuestionsCount).map((question, index) => (
            <div className="d-flex flex-column" key={index}>
              <p className="text-question mx-3 p-1">{question.text}</p>
              {conflictAnswers[index] && <p className="text-answer p-1 m-2">{answerOptions[conflictAnswers[index]-1]}</p>}
            </div>
          ))}
          { conflictQuestions.length !== conflictAnswers.length && <div className="d-flex">{
            this.state.answerOptions.map((option, index) => (
            <button 
              key={index}
              className="text-answer p-1 m-1" 
              value={index + 1}
              onClick={this.handleConflictQuestionSubmit}
              >
                {option}
              </button>
            ))
          }</div>}
          <div>
            {conflictQuestions.length === conflictAnswers.length &&  <button className="btn" onClick={this.handleConflictSectionSubmit}>Next</button>}
          </div>
        </div>}
          {this.state.showAngerQuestions && <div>
            {this.state.angerQuestions.slice(0, this.state.showQuestionsCount).map((question, index) => (
              <div className="d-flex flex-column" key={index}>
                <p className="text-question mx-3 p-1">{question.text}</p>
                {angerAnswers[index] && <div className="text-answer p-1 m-2">{answerOptions[angerAnswers[index]-1]}</div>}
              </div>
            ))}
            { angerQuestions.length !== angerAnswers.length && <div className="d-flex">{
              this.state.answerOptions.map((option, index) => (
              <button 
                key={index}
                className="text-answer p-1 m-1" 
                value={index + 1}
                onClick={this.handleAngerQuestionSubmit}
                >
                  {option}
                </button>
              ))
            }</div>}
            <div>
              {angerQuestions.length === angerAnswers.length &&  <button className="btn" onClick={this.handleAngerSectionSubmit}>Next</button>}
            </div>
          </div>}
        {this.state.showSEQuestions && <div>
          {this.state.seQuestions.slice(0, this.state.showQuestionsCount).map((question, index) => (
            <div className="d-flex flex-column" key={index}>
              <p className="text-question mx-3 p-1">{question.text}</p>
              {seAnswers[index] && <p className="text-answer p-1 m-2">{answerOptions[seAnswers[index]-1]}</p>}
            </div>
          ))}
          { seQuestions.length !== seAnswers.length && <div className="d-flex">{
            this.state.answerOptions.map((option, index) => (
            <button 
              key={index}
              className="text-answer p-1 m-1" 
              value={index + 1}
              onClick={this.handleSEQuestionSubmit}
              >
                {option}
              </button>
            ))
          }</div>}
          <div>
            {seQuestions.length === seAnswers.length &&  <button className="btn" onClick={this.handleSESectionSubmit}>Complete</button>}
          </div>
        </div>}
      </div>
    );
  }
}