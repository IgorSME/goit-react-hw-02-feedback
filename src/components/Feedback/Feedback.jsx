import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button key={option} type="button" onClick={onLeaveFeedback} name={option}>
      {option}
    </Button>
  ));
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
