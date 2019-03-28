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
class StyledApp extends Component {
  state = {
    reason: "",
    hours: "",
    where: "",
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
      reason,
      hours,
      where,
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
          ADOPTION INFORMATION
        </Typography>
        <form onSubmit={this.handleCreate}>
          <div className="adopt">
            <div>
              <TextField
                name="reason"
                label="What is your primary reason for adopting?"
                className="reason"
                value={reason}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                name="hours"
                label="How many hours a day will your pet be left alone?"
                className="hours"
                value={hours}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                name="where"
                label="Where?"
                className="where"
                value={where}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
          </div>
        </form>
      </Paper>
    );
  }
}
export default withStyles(styles)(StyledApp);

// import React from "react";
//
// export const AdoptInfo = props => {
//   return (
//     <>
//       <div>5/6 AdoptInfo</div>
//       <div>YOUR NEW PET: </div>
//       <div>
//         What is your primary reason for adopting?
//         _______________________________________________________{" "}
//       </div>
//       <div>
//         How many hours a day will your pet be left alone?_________________
//       </div>
//       <div>Where?_________________________ </div>
//       <div>
//         Under what circumstance would you not keep your pet? ___ Divorce ___
//         Illness in family ___ Moving ___ New Baby ___ New Job ___ Housebreaking
//         problems ___ Destructive behavior___ Biting/Scratching ___ Fleas ___
//         Allergies ___Shedding ___Conflicts with children ___ Conflicts with
//         other pets ___ Animal becomes ill ___ High veterinary costs ___ None of
//         the above ___ Other (please explain) _________________
//       </div>
//       <br />
//       <button name="adoptInfo" onClick={props.handleBack}>
//         back
//       </button>
//       <button name="adoptInfo" onClick={props.handleNext}>
//         next
//       </button>
//     </>
//   );
// };
