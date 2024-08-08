import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (<Wrapper>
    <SelectElem value={value} onChange={onChange}>
      {children}
    </SelectElem>
    <VisuallyHidden>{label}</VisuallyHidden>
    {displayedValue}
    <Arrow id="chevron-down" size={16} strokeWidth={2} />
  </Wrapper>
  );
};

export default Select;

const SelectElem = styled.select`
  appearance: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`
const Wrapper = styled.label`
  position: relative;
  font-family: Roboto, 'sans-serif';
  font-size: 16 / 16 rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  width: fit-content;
  background: ${COLORS.transparentGray15} ;
  padding: 12px 10px 12px 16px;
  border-radius: 8px;
  gap: 24px;
  color: ${COLORS.gray700};

  &:focus-within {
    outline: 2px auto -webkit-focus-ring-color;
  }

  &:hover{
    color: ${COLORS.black};
  }
`

const Arrow = styled(Icon)`
  color: inherit;
`
