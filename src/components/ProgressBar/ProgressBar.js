/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const stylesBase = {
  small: {
    "--height": `8px`,
    "--padding": `0px`,
    "--radius": `4px`,
  },
  medium: {
    "--height": `12px`,
    "--padding": `0px`,
    "--radius": `4px`,
  },
  large: {
    "--height": `16px`,
    "--padding": `4px`,
    "--radius": `8px`,
  },
};


const ProgressBar = ({ value, size }) => {
  const styles = stylesBase[size]

  if (!styles)
    throw new Error('wrong size !')

  return (
    <Wrapper role="progressbar" aria-valuenow={value} style={styles}>
      <Trimmer>
        <Value style={styles} value={value} />
      </Trimmer>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
};

export default ProgressBar;

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* offset-x | offset-y | blur-radius | color */
`
const Trimmer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Value = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: ${p => p.value}%;
  transition: all .5s ease-in-out;
`
