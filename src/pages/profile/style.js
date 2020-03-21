import styled from 'styled-components';
import dimensions from '../../shared/dimensions';
import measurements from '../../shared/measurements';

export const ProfilePage = styled.div`
  padding-top: ${dimensions.header.height};
  max-width: ${measurements.maxWidth.default};
  margin: 0 auto;
`;

export const StyledHeader = styled.header`
  padding: 2rem 0;
  display: flex;
`;

export const Username = styled.h2`
  font-size: 2.2rem;
  font-weight: 300;
  margin: 1rem 0 0 2rem;
`;