import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    '--font-size': `${14 / 16}rem`,
    '--border-width': `${1}px`,
    '--gap': `${8}px`,
    '--height': `${24 / 16}rem`,
    'icon': 16,
    'icon-stroke': 1,
  },
  large: {
    '--font-size': `${18 / 16}rem`,
    '--border-width': `${2}px`,
    '--gap': `${12}px`,
    '--height': `${36 / 16}rem`,
    'icon': 24,
    'icon-stroke': 2,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = sizes[size]
  if (!sizes[size]) throw new Error('wrong size !');

  return <Wrapper style={styles} width={`${width}px`}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper id={icon || "search"} size={styles.icon} strokeWidth={styles["icon-stroke"]} />
    <TextInput style={styles} placeholder={placeholder} {...delegated} />
  </Wrapper>;
};

export default IconInput;

const IconWrapper = styled(Icon)`
 color: inherit;
`;

const TextInput = styled.input`
  font-family: Roboto, 'sans-serif';
  
  appearance: none;
  border: none;
  outline: none;
  width: 100%;
  font-size:var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder{
   color: ${COLORS.gray500};
   font-weight: 400;
  }
`;


const Wrapper = styled.label`
  display: flex;
  align-items: center;
  height: var(--height);
  gap: var(--gap);
  width: ${p => p.width};
  border-color: ${COLORS.black};
  border-bottom-width: var(--border-width);
  border-style: solid;
  padding-bottom: 4px;
  line-height: 1.005;
  color: ${COLORS.gray700};
  transition: color .5s ease-in-out;
  
  &:focus-within {
    outline: 2px auto -webkit-focus-ring-color;
    outline-offset: 4px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

