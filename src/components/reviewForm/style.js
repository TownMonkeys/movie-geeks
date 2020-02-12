import styled from 'styled-components';
import theme from '../../shared/theme';

export const Form = styled.form`
  display: inline-block;
  background-color: ${theme.bg.default};
  border: 1px solid ${theme.border.light};
  margin-top: 1rem;
  border-radius: .1rem;
`;

export const Title = styled.h1`
  margin: 0;
  padding: .5rem;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid ${theme.border.light};
`;

export const MovieNameInput = styled.input`
  padding: 1rem;
  width: 20rem;

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const FormBody = styled.div`
  padding: .5rem;
`;