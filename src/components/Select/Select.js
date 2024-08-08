import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (<Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    {displayedValue}
    <SelectElem value={value} onChange={onChange}>
      {children}
    </SelectElem>
    <Arrow id="chevron-down" size={12} strokeWidth={2} />
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
  display: flex;
  align-items: center;
  width: fit-content;
  background: ${COLORS.transparentGray15} ;
  padding: 12px 16px;
  border-radius: 8px;
  gap: 24px;
  color: ${COLORS.gray700};

  &:focus-within {
    outline: ;
  }

  &:hover{
    color: ${COLORS.black};
  }
`

const Arrow = styled(Icon)`
  color: inherit;
`
