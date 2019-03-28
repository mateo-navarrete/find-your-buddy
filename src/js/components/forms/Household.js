import React, { Component } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel
  // IconButton,
  // FormControl,
  // Select
} from "@material-ui/core";
// import List, {
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction
// } from 'material-ui/List';
// import { MenuItem } from 'material-ui/Menu';
// import { Delete } from '@material-ui/icons';
// import { withStyles } from 'material-ui/styles';
import { withStyles } from "@material-ui/core/styles";
import "../../../styles/forms.css";

// import { Consumer } from './context';

const flex = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-evenly"
};

const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: `${unit * 3}px auto`,
    padding: unit * 2,
    maxWidth: 400
  },
  header: {
    ...flex,
    marginTop: unit * 2
  },
  form: {
    ...flex,
    marginBottom: unit
  }
});

// @withStyles(styles)
class Household extends Component {
  state = {
    name: "",
    contact: "",
    relationship: "",
    age: "",
    rent: false,
    own: false,
    house: false,
    apartment: false,
    condo: false,
    rules: ""
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  render() {
    const {
      name,
      contact,
      relationship,
      age,
      rent,
      own,
      house,
      apartment,
      condo,
      rules
    } = this.state;
    const { classes } = this.props;

    return (
      <Paper className="paperStyle">
        <Typography variant="display1" align="center" gutterBottom>
          HOUSEHOLD INFORMATION
        </Typography>
        <form onSubmit={this.handleCreate}>
          <div className="section1">
            <p className="peopleText">People living in your household:</p>
            <TextField
              name="name"
              label="Name"
              className="householdname"
              value={name}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="contact"
              label="Contact Number"
              className="contact"
              value={contact}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="relationship"
              label="Relationship"
              className="relationship"
              value={relationship}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="age"
              label="Age"
              className="age"
              value={age}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div className="housesection2">
            <p className="resText">Type of Residence: </p>
            <FormControlLabel
              control={
                <Checkbox
                  name="rent"
                  className="rent"
                  value={rent}
                  onChange={this.handleChange}
                  margin="normal"
                  color="primary"
                />
              }
              label="Rent"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="own"
                  value={own}
                  onChange={this.handleChange}
                  margin="normal"
                  color="primary"
                />
              }
              label="Own"
            />
          </div>

          <div className="housesection3">
            <p className="typeText">Type of Home:</p>
            {""}
            <FormControlLabel
              control={
                <Checkbox
                  name="house"
                  value={house}
                  onChange={this.handleChange}
                  margin="normal"
                  color="primary"
                />
              }
              label="House"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="apartment"
                  value={apartment}
                  onChange={this.handleChange}
                  margin="normal"
                  color="primary"
                />
              }
              label="Apartment"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="condo"
                  value={condo}
                  onChange={this.handleChange}
                  margin="normal"
                  color="primary"
                />
              }
              label="Condo"
            />
          </div>
          <div className="housesection4">
            <TextField
              name="rules"
              label="If Apartment/Condo, what are the rules about pets?"
              className="rules"
              value={rules}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
        </form>
      </Paper>
    );
  }
}
export default withStyles(styles)(Household);

// import React from "react";
//
// export const Household = props => {
//   return (
//     <>
//       <div>3/6 Household</div>
//       <div>People living in your household:</div>
//       <div>Name </div>
//       <div>Contact Number </div>
//       <div>Relationship </div>
//       <div>Age</div>
//       <div>Type of Residence: </div>
//       <div>Do you rent or own? ___ </div>
//       <div>Type of Home: House ___</div>
//       Apartment/Condo ___ Other:_____________________
//       <div>
//         If Apartment/Condo, what are the rules about pets?
//         _______________________________________________
//       </div>
//       <div>If you rent, please list landlord name and phone number:____</div>
//       <br />
//       <button name="household" onClick={props.handleBack}>
//         back
//       </button>
//       <button name="household" onClick={props.handleNext}>
//         next
//       </button>
//     </>
//   );
// };
