import React, { memo } from 'react';
import avatar from '../../../images/avatar.svg';

import { 
  Side,H1,ContainerMovie,StyledMovieHeadImg,Container,H2,P
} from '../style';

const movieSide = () => {

  
  return (
    <Side>
    <H1>Members</H1>
    <ContainerMovie>
      <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Mohamed</P>
      </Container>
       <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Mohamed</P>
      </Container>
       <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Mohamed</P>
      </Container>
       <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Mohamed</P>
      </Container>
       <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Mohamed</P>
      </Container>
    </ContainerMovie>
    </Side>
  );
}

export default memo(movieSide);