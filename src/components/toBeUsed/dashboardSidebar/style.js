import styled from 'styled-components/macro';

export const ContainerMovie = styled.div`
       width:100%;
       height:100%;
`;

export const StyledMovieHeadImg = styled.img`
    width:60px;
    height:60px;
    border-radius:100%;
    box-shadow:0px 0px 7px 0px rgba(23, 50, 50, 0.75);
`;
export const P = styled.p`
    color:#000;
    display:inline-block;
    position:absolute;
    padding-left:0.5em;
    font-size:1.2em;
    font-weight:bold;
`;
/*start movie side*/
export const Side = styled.div`
      width:100%;
      background-color:#fff;
      overflow-y:scroll;
      height:auto;  
 
      padding:0 0.7em 0.7em 0.7em;
      margin-top:2em;
      color:#999;
      border:1px solid #f1f1f1;
`;
export const H1 = styled.h1`
    margin-top:0;        
`;
export const Container = styled.div`
   width:100%;
   margin-bottom:0.4em;
   position:relative;
  padding-left:0.4em;
  position:relative;
`;
export const Join = styled.a`
  color:#f00;
  text-decoration:none;
  margin-left:10px;
  margin-top:30px;
`;
