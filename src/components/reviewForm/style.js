import styled from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const Form = styled.form`
  display: inline-block;
  width: 30rem;
  background-color: ${theme.bg.default};
  border: 1px solid ${theme.border.light};
  margin: 1rem 0;
  border-radius: ${measurements.borderRadius.default};
`;

export const Title = styled.h2`
  margin: 0;
  padding: .5rem;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid ${theme.border.light};
`;

export const MovieNameInput = styled.input`
  padding: 1rem;
  width: 100%;

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const FormBody = styled.div`
  padding: .5rem;
`;