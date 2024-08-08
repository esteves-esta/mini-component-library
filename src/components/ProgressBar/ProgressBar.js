/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const stylesBase = {
    base: {
      "--right-border-radius": `${value > 99 ? 4 : 0}px`,
    },
    small: { "--height": `8px` },
    medium: { "--height": `12px` },
    large: { "--height": `16px` },
  };

  const styles = { ...stylesBase['base'], ...stylesBase[size] };

  let label = value === 100 ? 'Completed' : `${value}%`;

  return (
    <>
      <Progress style={styles} size={size} value={value} min="0" max="100" />
      <VisuallyHidden>{label}</VisuallyHidden>
    </>
  )
};

export default ProgressBar;

const Progress = styled.progress`
  width: 100%;
  height: var(--height);
  border: none;
  border-radius: 6px;
  appearance: none;
  
  &::-webkit-progress-bar {
    appearance: none;
    background: ${COLORS.transparentGray15};
    padding: ${p => p.size === 'large' ? 4 : 0}px;
    border-radius: 8px;
    height: var(--height);
    /* offset-x | offset-y | blur-radius | color */
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  &::-webkit-progress-value {
    appearance: none;
    background-color: ${COLORS.primary};
    border-radius: 4px;
    border-top-right-radius: var(--right-border-radius);
    border-bottom-right-radius: var(--right-border-radius);
    height: var(--height);
    transition: all .5s ease-in-out;
  }
`
