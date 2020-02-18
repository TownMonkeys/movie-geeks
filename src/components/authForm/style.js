import styled, { css } from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const Form = styled.form`
  border: 1px solid ${theme.border.light};
  background-color: ${theme.bg.default};
  text-align: center;
  padding: 1rem 3rem;
  max-width: 24rem;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0;
`;

export const EncouragingStatement = styled.p`
  color: ${theme.text.grey};
  font-size: 1.07rem;
  font-weight: 600;
`;

const buttonStyles = css`
  border: none;
  cursor: pointer;
`;

export const FacebookButton = styled.button`
  ${buttonStyles}
  color: #fff;
  background-color: ${theme.bg.facebook};
  font-weight: 600;
  padding: .6rem 0;
  border-radius: ${measurements.borderRadius.button};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FacebookIcon = styled.img`
  width: 1rem;
  margin-right: .5rem;
`;