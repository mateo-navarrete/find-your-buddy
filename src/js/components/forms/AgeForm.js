import React from "react";
// import { RadioGroup } from ".";
import { StyledRadioGroup } from "..";
import { withAge } from "../../containers";
import StyledApp from "./StyledApp";
import { Paper } from "@material-ui/core";
import "../../../styles/forms.css";

const Age = ({ isComplete, ...props }) => {
  return (
    <>
      <Paper className="paperStyle">
        <StyledRadioGroup
          isComplete={isComplete}
          setAge={props.setAge}
          handleNext={props.handleNext}
        />
      </Paper>
    </>
  );
};

export const AgeForm = withAge(Age);

// <form onChange={e => props.setAge(e.target.value)}>
//   <RadioGroup id={id} label={label} options={options} />
// </form>
// <br />
// {is18 ? (
//   <button name="intro" onClick={props.handleNext}>
//     next
//   </button>
// ) : (
//   "You must be 18 to adopt a pet."
// )}
// </>
