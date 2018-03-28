import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

import CustomSelect from '../../../CustomSelect';

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return [
    'Provide general course information',
    'Select group for this course',
    'Confirm course creation'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddNewCourseForm />;
    case 1:
      return (
        <CustomSelect
          title="Select group"
          menuItems={['PI15B', 'PI16B', 'PI17B']}
        />
      );
    case 2:
      return 'Confirm course creation';
    default:
      return 'Unknown step';
  }
}

class AddCourseStepper extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  state = {
    activeStep: 0
  };

  isStepOptional = step => {
    return step === 1;
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={this.handleBack}
                className={classes.button}>
                Back
              </Button>
              <Button
                variant="raised"
                color="primary"
                onClick={
                  activeStep === steps.length - 1
                    ? this.props.myClick
                    : this.handleNext
                }
                className={classes.button}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const AddNewCourseForm = () => {
  return (
    <form class="loginForm" autoComplete="off">
      <TextField id="title" fullWidth label="Course title" margin="normal" />
      <TextField
        id="description"
        label="description"
        type="text"
        fullWidth
        margin="normal"
      />
    </form>
  );
};

export default withStyles(styles)(AddCourseStepper);