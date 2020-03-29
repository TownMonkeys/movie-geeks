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
  font-size: 1.5rem;
  padding: .5rem .6rem .75rem;
  width: 100%;

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const StyledMoviesResults = styled.ul`
  padding-left: 0;
  list-style: none;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  max-height: ${5 * measurements.height.movieOption}em;
  overflow: auto;

  &[data-expanded="false"] {
    display: none;
  }
`;

export const Movie = styled.li`
  background-color: ${theme.bg.default};
  height: ${measurements.height.movieOption}em;
  padding: 0.35em .5em;
  border-bottom: 1px solid ${theme.border.light};
  transition: background-color .1s;
  cursor: pointer;

  display: flex;

  &:hover {
    background-color: ${theme.bg.grey};
  }
`;

export const Thumbnail = styled.img`
  max-width: 100px;
  max-height: 100%;
`;

export const MovieInfo = styled.div`
  margin-left: 0.8em;
`;

export const MovieTitle = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const MovieReleaseDate = styled.p`
  margin: .5em 0 0;
`;