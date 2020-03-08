import styled from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';


export const Container = styled.div`
  position:relative;
  width:30rem;
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
  padding: .5rem;
`;
export const ResultNameInput = styled.ul`
  width: 100%;
    height: auto;
    background: #f00;
    z-index: 9999;
    position: absolute;
    top:77%;
`;
export const ResultNameInputLi = styled.li`
   background:#111;
   width:30rem;
   height:auto;
   padding:0.2em;
   list-style:none;
   margin-left:-40px;
    position: relative;
   border-bottom:1px solid #f2f2f2;

`;
export const SpanConatiner = styled.span`
    position: absolute;
    padding-left: 0.8em;
    padding-right: 0.3em;
    padding-top: 0.5em;
    color: #fff;
    font-size:1em;
`;
export const Ptitle = styled.p`
   font-weight:bolder;
   color:#f1f1f1;
`;
export const Img = styled.img`
   max-width:100px;
`;