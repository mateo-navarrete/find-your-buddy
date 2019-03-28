import React, { Component } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox
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
    condo: false
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
      condo
    } = this.state;
    const { classes } = this.props;

    return (
      <Paper className="paperStyle">
        <Typography variant="display1" align="center" gutterBottom>
          HOUSEHOLD INFORMATION
        </Typography>
        <form onSubmit={this.handleCreate}>
          <div className="section1">
            <p>People living in your household:</p>
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
          <div className="section2" />
          <p>Type of Residence: </p>
          <div className="section3">
            <Checkbox
              name="rent"
              className="rent"
              value={rent}
              onChange={this.handleChange}
              margin="normal"
            />
            Rent
            <Checkbox
              name="own"
              value={own}
              onChange={this.handleChange}
              margin="normal"
            />
            Own
          </div>
          <br />
          <div className="section3">
            <p>Type of Home:</p>
            <Checkbox
              name="house"
              value={house}
              onChange={this.handleChange}
              margin="normal"
            />
            House
            <Checkbox
              name="apartment"
              value={apartment}
              onChange={this.handleChange}
              margin="normal"
            />
            Apartment
            <Checkbox
              name="condo"
              value={condo}
              onChange={this.handleChange}
              margin="normal"
            />
            Condo
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
