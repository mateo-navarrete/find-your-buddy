import React, { Component } from 'react';
// import Radio from "./Radio";

export default class RadioGroup extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { options, id, label } = this.props;
    const renderOptions = options.map((option, i) => {
      return (
        <div key={i}>
          <label htmlFor={option.id}>{option.label}</label>
          <input
            type="radio"
            name={id}
            value={option.value}
            // checked={option.value === option.value} //{favorite === "dogs"}
            onChange={this.onRadioChange}
            // id={option.id}
          />
          <br />
        </div>
      );
    });
    return (
      <div>
        <fieldset>
          <label htmlFor={id}>{label}</label>
          <br />
          {options.length ? renderOptions : ''}
        </fieldset>
      </div>
    );
  }
}
