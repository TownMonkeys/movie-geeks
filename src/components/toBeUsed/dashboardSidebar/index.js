import React, { memo,fragment } from 'react';
import avatar from '../../../images/avatar.svg';

import { 
  Side,H1,ContainerMovie,StyledMovieHeadImg,Container,H2,P,Join
} from './style';

const movieSide = () => {

  

  return (
    <fragment>
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
    <Side>
    <H1>Channels </H1>
    <ContainerMovie>
      <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Konan</P>
       <Join href="#">Join +</Join>
      </Container>
       <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Dororo</P>
       <Join href="#">Join +</Join>
      </Container>
       <Container>
      <StyledMovieHeadImg  src={avatar}/>
       <P>Jo Jo 's </P>
       <Join href="#">Join +</Join>
      </Container>
    </ContainerMovie>

    </Side>
  </fragment>
  );
}

export default memo(movieSide);