import React, { memo } from 'react';
import { Grid, GridItem } from 'styled-grid-component';

import { 
  MoviesSection,
  Title,
  GridConatiner,
  ContainerMovie
} from './style';
import MoviesList from './components/moviesList';
import MoviesSide from './components/movieSide';


const Movies = () => {
  return (
    <MoviesSection>
       <Grid 
        width="100%"
        height="100%"
        templateColumns="2fr 1fr"
        gap="30px" >
      <GridItem >
      <MoviesList />
      </GridItem >
      <GridItem >
      <MoviesSide/>
      </GridItem>
      </Grid>
    </MoviesSection>
  );
}

export default memo(Movies);