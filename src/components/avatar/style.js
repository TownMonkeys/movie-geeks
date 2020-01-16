import styled from 'styled-components';
import theme from '../../shared/theme';

const determineAvatarDimensionsBasedOnSize = (props) => (
  props.size === 'small' ? '2rem' 
  : props.size === 'medium' ? '3rem'
  : '5rem' 
);

export const StyledAvatar = styled.img`
  width: ${determineAvatarDimensionsBasedOnSize};
  height: ${determineAvatarDimensionsBasedOnSize};
  background-color: #fff;
  padding-top: .15rem;
  border: 1px solid ${theme.border.dark};
  border-radius: 50%;
`;