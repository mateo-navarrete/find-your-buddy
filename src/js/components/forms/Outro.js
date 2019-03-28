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
class Outro extends Component {
  state = {
    name: "",
    int: "",
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
      int,
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
          CONFIRM
        </Typography>
        <form onSubmit={this.handleCreate}>
          <p className="peopleText">
            The information I have provided in this Pet Adoption Questionnaire
            is true and accurate. I understand that giving false information or
            refusing to provide certain information is grounds for my
            application to be denied.
          </p>
          <div className="section1">
            <TextField
              name="name"
              label="Print Name"
              className="signature"
              value={name}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="initials"
              label="Initials"
              className="int"
              value={int}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="animal"
              label="Animal ID"
              className="animal"
              value={relationship}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
        </form>
      </Paper>
    );
  }
}
export default withStyles(styles)(Outro);
// import React from "react";
//
// export const Outro = props => {
//   return (
//     <>
//       <div>6/6 Outro</div>
//       <br />
//       <div>
//         The information I have provided in this Pet Adoption Questionnaire is
//         true and accurate. I understand that giving false information or
//         refusing to provide certain information is grounds for my application to
//         be denied.
//       </div>
//       <div>Signature: __________________________________________ </div>
//       <div>Date:</div>
//       <div>
//         ________ FOR INTERNAL USE ONLY: Date: _________________________ AC
//         Initials: ___________________________ Animal Name(s):
//         _________________________ Animal #: ___________________________ Adoption
//         counseling notes attached: ___ Yes ___ No If no, why? __
//       </div>
//       <br />
//       <button name="outro" onClick={props.handleBack}>
//         back
//       </button>
//     </>
//   );
// };
