import styled from 'styled-components/macro';
import theme from '../shared/theme';

export const CommunicationSvg = styled.svg`
  width: 1.5rem;
  height: auto;
`;

export const CommunicationSvgPath = styled.path`
  fill: #424242;
  transition: .1s fill;
`;

export const StyledStarSvg = styled.svg`
  width: 100%;
`;

export const Title = styled.title``;

export const StarSvgPath = styled.path`
  fill: ${theme.bg.pink};
`;

export const StyledLikeSvg = styled.svg`
  width: 100%;
`;

export const LikeSvgPath = styled.path`
  transition: .1s stroke-width, .1s fill;

  stroke: #212121;
  stroke-width: 2;
  fill: ${theme.bg.default};

  &[data-filled="true"] {
    stroke-width: 0;
    fill: ${theme.bg.pink};
  }
`;