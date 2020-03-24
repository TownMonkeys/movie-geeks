import styled from 'styled-components/macro';
import dimensions from '../../shared/dimensions';
import measurements from '../../shared/measurements';

export const HomePage = styled.div`
  padding-top: ${dimensions.header.height};
  max-width: ${measurements.maxWidth.default};
  margin: 0 auto;
`;