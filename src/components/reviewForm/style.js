import styled from 'styled-components/macro';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 100%;
  background-color: #000;
  z-index: 2;
  opacity: 0;
  transition: opacity .15s;

  &[data-form-focused="true"] {
    bottom: 0;
    opacity: .6;
  }
`;

export const Form = styled.form`
  display: inline-block;
  width: 30rem;
  background-color: ${theme.bg.default};
  border: 1px solid ${theme.border.light};
  margin: 1rem 0;
  border-radius: ${measurements.borderRadius.default};

  &[data-focused="true"] {
    position: relative;
    z-index: 3;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: .5rem;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid ${theme.border.light};
`;

export const FormBody = styled.div`
  padding: .5rem;
`;

export const MovieNameInputContainer = styled.div`
  position: relative;
`;

export const MovieNameInput = styled.input`
  font-size: 1.2rem;
  padding: .5rem .6rem .7rem;
  width: 100%;
  margin-bottom: 1rem;

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const StyledMoviesResults = styled.datalist``;

export const Movie = styled.option``;