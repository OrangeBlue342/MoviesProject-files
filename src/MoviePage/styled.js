import styled from "styled-components";
import { ReactComponent as CameraIcon } from "./icon.svg";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
}
`;

export const Container = styled.div`
width: 100%;
max-width: 1920px;
height: 770px;
background-color: ${({ theme}) => theme.colors.black};
/* background-image: url('/path/to/movie/poster.jpg');*/
background-size: cover;
margin-bottom: 64px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    height: 300px;
    margin-bottom: 32px;
}
`;

export const MovieDetails = styled.div`
max-width: 1300px;
width: 100%;
padding: 0 16px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    padding: 0 8px;
}
`;

export const Description = styled.div`
`;

export const MoviePoster = styled.div`
`;

export const MovieTitle = styled.h2`
`;

export const MovieYear = styled.p`
`;

export const MovieProduction = styled.p`
`;

export const MovieDate = styled.p`

`;

export const MovieGenre = styled.p`
`;

export const MovieRating = styled.p`
`;

export const Story = styled.p`
`;

export const Header = styled.h3`
`;

export const Tile = styled.div`
`;

export const NoMovieIcon = styled(CameraIcon)`
`;