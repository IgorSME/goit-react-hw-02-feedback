import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Section.styled';
export { Container } from './Section.styled';

export function Section({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
