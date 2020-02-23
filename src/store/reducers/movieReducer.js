const initState = {
  movies: [
    {
      id: 1,
      user: 'Mohammed Shahawy',
      avatar,
      cover: harryPotterCover,
      name: 'Harry Potter and the Sorcerer\'s Stone',
      genre: ['Adventure', 'Family'],
      rating: 5,
      review: 'As good an adaption as could ever be expected',
      likes: 24,
      lastLiker: 'Waleed'
    },
    {
      id: 2,
      user: 'Saher Elgendy',
      avatar,
      cover: beautifulMindCover,
      name: 'A Beautiful Mind',
      genre: ['Biography', 'Drama'],
      rating: 4,
      review: 'A beautifully written, acted, and crafted movie.',
      likes: 13,
      lastLiker: 'Erik'
    }
  ]
};

const movieReducer = (state = initState, action) => {
  return state;
};

export default movieReducer;