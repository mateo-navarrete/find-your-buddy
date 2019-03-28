import React, { Component } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button
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
    email: "",
    address: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zipCode: "",
    phone: ""
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  render() {
    const {
      name,
      email,
      address,
      street,
      apt,
      city,
      state,
      zipCode,
      phone
    } = this.state;
    const { classes } = this.props;

    return (
      <Paper className="paperStyle">
        <Typography variant="display1" align="center" gutterBottom>
          HOUSEHOLD INFORMATION
        </Typography>
        <form onSubmit={this.handleCreate}>
          <div className="section1">
            <TextField
              name="household"
              label="Name"
              className="name"
              value={name}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              className="email"
              value={email}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div className="section2">
            <TextField
              name="address"
              label="Address"
              className="address"
              value={address}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="street"
              label="Street"
              className="address"
              value={street}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <div className="section3">
            <TextField
              name="apt"
              label="Apt #"
              className="smallText"
              value={apt}
              onChange={this.handleChange}
              margin="normal"
            />

            <TextField
              name="city"
              label="City"
              className="smallText"
              value={city}
              onChange={this.handleChange}
              margin="normal"
            />

            <TextField
              name="state"
              label="State"
              className="smallText"
              value={state}
              onChange={this.handleChange}
              margin="normal"
            />

            <TextField
              name="zipCode"
              label="ZipCode"
              className="smallText"
              value={zipCode}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="phone"
              label="Phone"
              value={phone}
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
