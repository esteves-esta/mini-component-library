/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const stylesBase = {
    base: {
      "--value": `${value}% 100%`,
      "--right-border-radius": `${value > 98 ? 4 : 0}px`,
    },
    small: {
      "--height": `8px`
    },
    medium: { "--height": `12px` },
    large: { "--height": `16px` },
  };

  const styles = { ...stylesBase['base'], ...stylesBase[size] };

  let ProgressWrapper;
  if (size === 'large') ProgressWrapper = Wrapper;
  else ProgressWrapper = React.Fragment;

  let label = value === 100 ? 'Completed' : `${value}%`;

  return (
    <ProgressWrapper>
      <Progress style={styles} value={value} type="range" min="0" max="100" />
      <VisuallyHidden>{label}</VisuallyHidden>
    </ProgressWrapper>
  );

  // return (
  //   <progress ref={progressBarRef} value={progressValue} max="1" />
  // )
};

export default ProgressBar;

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  padding: 4px;
  border-radius: 8px;
  
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `

const Progress = styled.input`
// https://nikitahl.com/style-range-input-css
  -webkit-appearance: none;
  margin-right: 15px;
  width: 99%;
  height: var(--height);
  background: transparent;
  border-radius: 4px;
  border-top-right-radius: var(--right-border-radius);
  border-bottom-right-radius: var(--right-border-radius);

  background-image: linear-gradient(${COLORS.primary}, ${COLORS.primary});
  background-size: var(--value);
  background-repeat: no-repeat;
  transition: background .5s ease-in-out;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  } 
`
