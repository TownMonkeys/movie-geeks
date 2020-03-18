import styled from 'styled-components';
import theme from '../../shared/theme';
import ReactAvatar from 'react-avatar';

export const StyledAvatar = styled(ReactAvatar)`  
  .sb-avatar__image {
    border: 1px solid ${theme.border.dark};
  }
`;