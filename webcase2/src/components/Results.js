import React from 'react';

export default class Results extends React.Component {
  constructor(){
    super();
  }
  state = {
    conflictResults: undefined,
    angerResults: undefined,
    seResults: undefined
  };
  getResult = (answers) => {
    if (answers.length > 0) {
      const sum = answers.reduce((a,b) => parseInt(a) + parseInt(b));
      if (sum <= 11) {
        return `You're good!`;
      } else if (sum <= 21 && sum > 11) {
        return `You might want to keep an eye on this topic. Find people who encourage you to try your best, but don't insist on perfection. Most of us do better when the pressure is off.`
      } else {
        return `This seems to be an area of struggle for you. Click on the resources tab to get support and help.`;
      }
    } else {
      return `There were no answers to this section`;
    }
  };
  render() {
    return (
      <div className="results">
        <div>
          Conflict:
          {this.getResult(this.props.conflictAnswers)}
        </div>
        <div>
          Anger:
          {this.getResult(this.props.angerAnswers)}
        </div>
        <div>
          Self Esteem:
          {this.getResult(this.props.seAnswers)}
        </div>
      </div>
    );
  }
};