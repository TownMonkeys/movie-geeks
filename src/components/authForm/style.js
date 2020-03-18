import styled from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';
import { Link } from 'react-router-dom';

export const Form = styled.form``;

export const Container = styled.div`
  border: 1px solid ${theme.border.light};
  background-color: ${theme.bg.default};
  border-radius: ${measurements.borderRadius.default};
  text-align: center;
  padding: 1rem 3rem;
  width: ${measurements.width.auth};

  display: flex;
  flex-direction: column;
  
  &:not(:last-child) {
    margin-bottom: .625rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 1rem;
`;

export const EncouragingStatement = styled.p`
  color: ${theme.text.grey};
  font-size: 1.07rem;
  font-weight: 600;
  margin: 0 0 1rem;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  padding: .6rem 0;
  border-radius: ${measurements.borderRadius.button};
  background-color: ${props => props.bg === 'pink' ? theme.bg.pink : null};
  margin-top: 1rem;
`;

export const StyledFacebookButton = styled(Button)`
  background-color: ${theme.bg.facebook};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FacebookIcon = styled.img`
  width: 1rem;
  margin-right: .5rem;
`;

export const Divider = styled.p`
  font-weight: 600;
  color: ${theme.text.grey};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 6.5rem;
    background-color: #616161;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: ${theme.bg.grey};
  border: 1px solid ${theme.border.light};
  padding: .5rem 0 .5rem .5rem;
  border-radius: ${measurements.borderRadius.input};
  margin-bottom: ${props => props.last ? '.875rem' : '.375rem'};
  width: ${props => props.inline ? '48.8%' : 'auto'};

  &.signupForm__usernameInput:focus + .signupForm__usernameFeedback {
    display: flex;
  }
`;

export const UsernameFeedback = styled.p`
  display: none;
  color: ${props => props.valid ? theme.text.valid : theme.text.warning}
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

export const AuthError = styled.p`
  color: ${theme.text.warning};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorIcon = styled.img`
  width: 1rem;
  margin-left: .5rem;
`;

export const P = styled.p``;

export const StyledLink = styled(Link)`
  color: ${theme.text.pink};
  margin-left: .25rem;
`;