import styled from "styled-components";
import { ReactComponent as CameraIcon } from "./icon.svg";
import { ReactComponent as StarIcon } from "./shape-star.svg";

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
/* background-image: url('/path/to/movie/poster.jpg');*/
background-size: cover;
margin-bottom: 64px;
background-image: ${({ theme }) => theme.effects.posterGradient}; 

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    height: 300px;
    margin-bottom: 32px;
}
`;

export const MovieDetails = styled.div`
max-width: 1368px;
margin: auto;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100%;
    padding: 0 8px;
}
`;

export const MovieTile = styled.article`
max-width: 1368px;
height: 544px;
margin: auto;
margin-bottom: 64px;
background-color: ${({ theme }) => theme.colors.white};
padding: 40px;
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 40px;
box-shadow: 0px 4px 12px #BAC7D580;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
padding: 16px;
}
`;

export const Poster = styled.div`
width: 312px;
height: 464px;
border-radius: 5px;
scale: crop;
background-color: ${({ theme }) => theme.colors.waterloo};
background-size: cover;
background-position: center;
background-position-x: center;
background-image: ${({ theme }) => theme.effects.tileSHadow};
display: flex;
align-items: center;
justify-content: center;

/* background-image: url('/path/to/movie/poster.jpg') - na później;*/

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
max-width: 100%;
}
`;

export const Description = styled.div`
width: 936px;
height: 412px;
padding-top: 8px;
padding-bottom: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;


`;

export const Title = styled.header`
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
margin-bottom: 18px;

`;

export const Year = styled.div`
font-size: 22px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
word-break: break-word;
margin-bottom: 18px;
`;

export const DataTile = styled.ul`
width: auto;
max-width: 397px;
height: 52px;
padding: 0;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
margin-top: 8px;
margin-bottom: 18px;
list-style: none;
color: ${({ theme }) => theme.colors.waterloo};
margin-bottom: 18px;
`;

export const Data = styled.li`
height: 22px;
font-size: 18px;
font-weight: 400;
line-height: 120%
letter-spacing 0px;
display: flex;
align-items: center;
color: ${({ theme }) => theme.colors.black};

`;

export const Tags = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 16px;
margin-bottom: 18px;
list-style: none;
`;

export const Tag = styled.li`
width: auto;
height: 30px;
background-color: ${({ theme }) => theme.colors.mystic};
padding: 8px 16px;
border-radius: 5px;
font-size: 14px;
font-weight: 400;
line-height: 100%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
`;

export const RatingContent = styled.div`
width: auto;
height: 29px;
font-size: 14px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
margin-bottom: 18px;
display: flex;
flex-direction: row;
align-items: baseline;
`;

export const Rating = styled.p`
width: auto;
height: 29px;
font-size: 22px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};

`;

export const Story = styled.p`
width: 100%;
height: auto;
font-size: 20px;
font-weight: 400;
line-height: 160%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.h3`
`;

export const Tile = styled.div`
`;

export const NoMovieIcon = styled(CameraIcon)`
width: 128px;
height: 128px;

`;

export const Star = styled(StarIcon)`
width: 16px;
height: 16px;

`;