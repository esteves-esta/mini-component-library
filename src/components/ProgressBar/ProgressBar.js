/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  const stylesBase = {
    small: { "--height": `8px` },
    medium: { "--height": `12px` },
    large: { "--height": `16px` },
  };

  let label = value === 100 ? 'Completed' : `${value}%`;

  return (
    <Wrapper size={size} role="progressbar" aria-valuenow={value}>
      <Value style={stylesBase[size]} value={value} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  )
};

export default ProgressBar;

const Wrapper = styled.div`
  height: var(--height);
  padding: ${p => p.size === 'large' ? 4 : 0}px;
  width: 100%;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  /* offset-x | offset-y | blur-radius | color */
`

const Value = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: ${p => p.value}%;
  border-radius: 4px 0px 0px 4px; 
  border-top-right-radius: ${p => p.value > 99 && 4}px;
  border-bottom-right-radius: ${p => p.value > 99 && 4}px;
  transition: all .5s ease-in-out;
`
