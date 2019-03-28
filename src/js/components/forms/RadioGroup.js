import React, { Component } from 'react';

export default class RadioGroup extends Component {
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
