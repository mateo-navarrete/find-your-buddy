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
class PetStatus extends Component {
  state = {
    breed: "",
    owned: "",
    age: "",
    sex: "",
    yes: false,
    no: false
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  render() {
    const { breed, owned, age, sex, yes, no } = this.state;
    const { classes } = this.props;

    return (
      <Paper className="paperStyle">
        <Typography variant="display1" align="center" gutterBottom>
          PET STATUS
        </Typography>
        <form onSubmit={this.handleCreate}>
          <p className="petText">
            LIST BELOW ALL PETS CURRENTLY LIVING IN YOUR HOUSEHOLD
          </p>
          <div className="petsection1">
            <TextField
              name="breed"
              label="Species/Breed?"
              value={breed}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="owned"
              label="Owned how long?"
              value={owned}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="age"
              label="Age"
              value={age}
              onChange={this.handleChange}
              margin="normal"
            />
            <TextField
              name="sex"
              label="Sex"
              value={sex}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
          <br />
          <br />
          <p className="spayText">Spayed / Neutered?</p>
          <div className="petsection2">
            <FormControlLabel
              control={
                <Checkbox
                  name="yes"
                  className="spayed"
                  value={yes}
                  onChange={this.handleChange}
                  margin="normal"
                  color="primary"
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="no"
                  value={no}
                  onChange={this.handleChange}
                  margin="normal"
                  color="primary"
                />
              }
              label="No"
            />
          </div>
        </form>
      </Paper>
    );
  }
}
export default withStyles(styles)(PetStatus);

// import React from "react";
//
// export const PetStatus = props => {
//   return (
//     <>
//       <div>4/6 PetStatus</div>
//       <div>LIST BELOW ALL PETS CURRENTLY LIVING IN YOUR HOUSEHOLD </div>
//       <div>Species/Breed? </div>
//
//       <div>Owned how long? </div>
//       <div>Age? </div>
//       <div>Sex? </div>
//       <div>Spayed / Neutered? </div>
//       <div> Current on vaccinations? </div>
//       <div>Kept indoors or outdoors? </div>
//       <div>LIST BELOW PETS THAT YOU HAVE PREVIOUSLY OWNED </div>
//       <div>Species/Breed? </div>
//       <div>Owned how long? </div>
//       <div> Age? </div>
//       <div>Spayed/Neutered? </div>
//       <div>Kept indoors or outdoors? </div>
//       <div>What happened to him/her? </div>
//       <div>VETERINARY/CLINIC </div>
//       <div>
//         {" "}
//         NAME AND PHONE NUMBER:
//         __________________________________________________________________________________________{" "}
//       </div>
//       <div>
//         PERSONAL REFERENCES: Name Relationship to Adopter Contact information
//       </div>
//       <br />
//       <button name="petStatus" onClick={props.handleBack}>
//         back
//       </button>
//       <button name="petStatus" onClick={props.handleNext}>
//         next
//       </button>
//     </>
//   );
// };
