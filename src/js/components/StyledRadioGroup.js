import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { StyledButton } from '.';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  // state = {
  //   // value: true,
  //   id: 'is18',
  //   // is18: false,
  //   label: 'Are you 18 years of age or older',
  //   options: [
  //     { id: 1, value: true, label: 'Yes ' },
  //     { id: 2, value: false, label: 'No ' },
  //   ],
  //   message: '',
  // };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   let nextValue;
  //   console.log(name, value);
  //   if (name === 'is18') {
  //     nextValue = value === 'true';
  //   }
  //
  //   this.setState({
  //     [name]: nextValue,
  //     message: '',
  //   });
  // };

  render() {
    // const { is18 } = this.state;
    const { is18, classes, handleNext, setAge } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">
            Are you 18 years of age or older
          </FormLabel>
          <RadioGroup
            aria-label="is18"
            name="is18"
            className={classes.group}
            value={is18}
            onChange={e => setAge(e.target.value)}
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

// RadioButtonsGroup.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(RadioButtonsGroup);

// <RadioGroup
//   aria-label="Gender"
//   name="gender1"
//   className={classes.group}
//   value={this.state.value}
//   onChange={this.handleChange}
// >
//   <FormControlLabel
//     value="female"
//     control={<Radio />}
//     label="Female"
//   />
//   <FormControlLabel value="male" control={<Radio />} label="Male" />
//   <FormControlLabel value="other" control={<Radio />} label="Other" />
//   <FormControlLabel
//     value="disabled"
//     disabled
//     control={<Radio />}
//     label="(Disabled option)"
//   />
// </RadioGroup>

// <StyledButton is18={is18} handleNext={handleNext} />
