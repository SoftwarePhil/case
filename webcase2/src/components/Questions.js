import React from 'react';

export default class Questions extends React.Component {
  state = {
    stateName: undefined,
    cityName: undefined,
    schoolName: undefined,
    grade: undefined,
    error: undefined,
    answerOptions: ['Never', 'Almost Never', 'Sometimes', 'Almost Always', 'Always'],
    gradeOptions: ['6', '7', '8', '9', '10', '11', '12'],
    conflictQuestions: [
      'Do you always have to have the last word in a disagreement?',
      `It is hard to see another's point of view?`,
      'Are you uncomfortable around conflict?',
    ],
    conflictAnswers: [],
    angerQuestions: [
      'When you get angry do you think of hurting yourself?',
      'Do you keep your anger bottled up inside?',
      'Does anyone around you take their anger out on you or the people you love?'
    ],
    angerAnswers: [],
    seQuestions: [
      'Do you like what you see when you look in the mirror?',
      'Do you remain friends with people that call you names or treat you badly?',
      'Do people you love the most talk negative to you or put you down?',
    ],
    seAnswers: [],
    showBasicInfo: false,
    showConflictQuestions: true,
    showAngerQuestions: false,
    showSEQuestions: false,
    showQuestionsCount: 1,
    showResults: false
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
    console.log(this.state);
  }
  componentDidMount() {
    // api call to get questions using fetch() set state with questions
  };
  render() {
    const conflictQuestions = this.state.conflictQuestions;
    const conflictAnswers = this.state.conflictAnswers;
    const angerQuestions = this.state.angerQuestions;
    const angerAnswers = this.state.angerAnswers;
    const seQuestions = this.state.seQuestions;
    const seAnswers = this.state.seAnswers;
    const answerOptions = this.state.answerOptions;
    return (
      <div className="questions-container m-auto">
        {this.state.showBasicInfo && <div className=" w-100 p-3">
          <p className="error">{this.state.error}</p>
          <p>1. What state do you live in?</p>
          <input type="text" id="state"></input>
          <p>2. What city do you live in?</p>
          <input type="text" id="city"></input>
          <p>3. What is the name of your school?</p>
          <input type="text" id="school"></input>
          <p>4. What grade are you in?</p>
          {this.state.gradeOptions.map(grade => (
            <button 
              key={grade}
              value={grade}
              className={grade === this.state.grade ? "selected-grade mr-2" : "grades mr-2"}
              onClick={this.handleGradeButtonClick}
            >
              {grade}
            </button>
          ))}
          <div>
            <button className="btn" onClick={this.handleInfoSectionSubmit}>Next</button>
          </div>
        </div>}
        {this.state.showConflictQuestions && <div>
          {this.state.conflictQuestions.slice(0, this.state.showQuestionsCount).map((question, index) => (
            <div className="d-flex flex-column" key={index}>
              <p className="text-question mx-3 p-1">{question}</p>
              {conflictAnswers[index] && <p className="text-answer p-1">{answerOptions[conflictAnswers[index]-1]}</p>}
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
                <p className="text-question mx-3 p-1">{question}</p>
                {angerAnswers[index] && <p className="text-answer p-1">{answerOptions[angerAnswers[index]-1]}</p>}
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
              <p className="text-question mx-3 p-1">{question}</p>
              {seAnswers[index] && <p className="text-answer p-1">{answerOptions[seAnswers[index]-1]}</p>}
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