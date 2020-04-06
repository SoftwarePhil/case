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
  render() {
    return (
      <div className="results">
        <div>
          Conflict:
          {this.props.conflictAnswers.map(answer => (<p>{answer}</p>))}
        </div>
        <div>
          Anger:
          {this.props.angerAnswers.map(answer => (<p>{answer}</p>))}
        </div>
        <div>
          Self Esteem:
          {this.props.seAnswers.map(answer => (<p>{answer}</p>))}
        </div>
      </div>
    );
  }
};