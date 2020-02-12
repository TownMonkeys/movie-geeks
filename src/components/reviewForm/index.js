import React, { memo } from 'react';
import { 
  Form,
  Title,
  MovieNameInput,
  FormBody
} from './style';

const ReviewForm = () => {
  return (
    <Form>
      <Title>Review Movie</Title>

      <FormBody>
        <MovieNameInput 
          type="search"
          aria-label="movie name"
          placeholder="Type the movie name .."
        />
      </FormBody>
    </Form>
  );
}

export default memo(ReviewForm);