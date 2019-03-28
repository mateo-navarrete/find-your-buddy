import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ReportProblem from '@material-ui/icons/ReportProblem';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function IconLabelButtons(props) {
  const { classes, is18, handleNext } = props;
  return (
    <div>
      <Button
        variant="contained"
        disabled={is18 ? false : true}
        color="primary"
        className={classes.button}
        name="intro"
        onClick={handleNext}
      >
        {is18 ? (
          <DoneIcon className={classes.leftIcon} />
        ) : (
          <ReportProblem className={classes.leftIcon} />
        )}
        Next
      </Button>
    </div>
  );
}

// IconLabelButtons.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(IconLabelButtons);
