import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AdoptInfo, Household, AgeForm, Outro, Personal, PetStatus } from '.';
import { withSteps } from '../../containers';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return [
    'Age Verification',
    'Contact Info',
    'Household',
    'Pet History',
    'Adopt Info',
    'Confirmation',
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <AgeForm />;
    // 'Select campaign settings...';
    case 1:
      return <Personal />;
    case 2:
      return <Household />;
    case 3:
      return <PetStatus />;
    case 4:
      return <AdoptInfo />;
    case 5:
      return <Outro />;
    default:
      return 'Unknown stepIndex';
  }
}

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes, isAgeComplete } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    console.log('@', this.props, isAgeComplete);
    const isActive = activeStep === 0 ? !isAgeComplete : false;
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div className={classes.instructions}>
                {getStepContent(activeStep)}
              </div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  disabled={isActive}
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withSteps(
  withStyles(styles)(HorizontalLabelPositionBelowStepper)
);

// <Typography className={classes.instructions}>
//   {getStepContent(activeStep)}
// </Typography>
