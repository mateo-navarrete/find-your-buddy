import React from "react";
import { InlineIcons } from ".";

export const Personal = props => {
  return (
    <>
      <div>CONTACT AND HOUSEHOLD INFORMATION </div>
      <InlineIcons />
      <div>Name:_</div> <div>Email:_</div> <div>Address:_</div>
      <div> Street </div>
      <div> Apt. # </div>
      <div>City </div>
      <div>State </div>
      <div> Zip Code</div>
      <div>Home Phone:_</div>
      <div>Work Phone:_</div> <div>Cell Phone:_</div>
      <br />
      <button name="personal" onClick={props.handleBack}>
        back
      </button>
      <button name="personal" onClick={props.handleNext}>
        next
      </button>
    </>
  );
};
