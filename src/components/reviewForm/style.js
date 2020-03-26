import styled from 'styled-components/macro';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';


export const Container = styled.div`
  position: relative;
  width: 30rem;
`;
export const Form = styled.form`
  display: inline-block;
  width: 100%;
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
  font-size: 1.5rem;
  padding: .5rem .6rem .75rem;
  width: 100%;

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const FormBody = styled.div`
  position: relative;
  padding: .5rem;
`;

export const StyledMoviesResults = styled.ul`
  padding-left: 0;
  list-style: none;
  position: absolute;
  left: .5em;
  right: .5em;
  margin: 0;
`;

export const Movie = styled.li`
  background-color: ${theme.bg.default};
  height: auto;
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
max-height: 80px;
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