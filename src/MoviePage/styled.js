import styled from "styled-components";
import { ReactComponent as CameraIcon } from "./icon.svg";
import { ReactComponent as StarIcon } from "./shape-star.svg";
import { ReactComponent as StarIcon40px } from "./shape-star.svg";
import { ReactComponent as PersonIcon } from "./Person.svg";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px;
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
display: flex;
align-items: flex-end;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    height: 148px;
    margin-bottom: 16px;
}
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
background-color: ${({ theme }) => theme.colors.scienceBlue};
width: auto;
height: 176px;
margin-left: 276px;
margin-bottom: 57px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 51px;
    margin-bottom: 8px;
    margin-left: 16px;
}
`;

export const MovieTitle = styled.header`
width: auto;
height: 77px;
font-size: 64px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 29px;
    font-size: 24px;
}
`;

export const TitleRatingContent = styled.div`
width: auto;
height: 40px;
margin-top: 8px;
font-size: 16px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: 18px;
    margin-top: 4px;
    font-size: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
}
`;

export const Layout = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
font-size: 16px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme}) => theme.colors.white};
margin-bottom: 16px;
margin-top: 16px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    gap: 4px;
    font-size: 10px;
    margin-top: 0;
    margin-bottom: 0;
}
`;

export const TitleRating = styled.div`
width: auto;
height: 40px;
font-size: 30px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   width: auto;
   height: 18px;
   font-size: 14px;
}
`;

export const MovieDetails = styled.div`
max-width: 1368px;
width: auto;
margin: auto;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 288px;
    width: auto;
    margin: auto;
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
    max-width: 288px;
    height: 400px;
    grid-template-rows: auto auto;
    grid-gap: 16px;
    padding: 16px;
    margin-bottom: 21px;
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
width: 114px;
height: 169px;
}
`;

export const MobileOnly = styled.div`

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
    margin-bottom: 16px;


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
flex-wrap: wrap;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
   width: 126px;
   height: auto;
   padding-top: 0;
   padding-bottom: 0;
   align-items: flex-start;
}
`;

export const Title = styled.header`
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
margin-bottom: 24px;

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
column-gap: 8px;
margin-top: 8px;
margin-bottom: 18px;
list-style: none;
color: ${({ theme }) => theme.colors.waterloo};
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
width: auto;
height: auto;
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 16px;
padding-inline-start: 0;
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
margin-top: 8px;
display: flex;
flex-direction: row;
align-items: baseline;

`;

export const Rating = styled.div`
width: auto;
height: 29px;
font-size: 22px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
vertical-align: middle;
color: ${({ theme }) => theme.colors.black};
margin-right: 8px;
`;

export const Votes = styled.p`
width: auto;
height: 17px;
font-size: 14px;
font-weight: 400;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
margin-left: 8px;
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

export const PeopleSection = styled.section`
max-width: 1368px;
margin: auto;
margin-bottom: 64px;


`;

export const Header = styled.header`
width: auto;
height: 43px;
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
margin-bottom: 36px;
`;

export const TileSection = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
grid-gap: 16px;
margin-bottom: 48px;
`

export const Tile = styled.div`
width: 208px;
height: 339px;
border-radius: 5px;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
padding: 16px;
margin-bottom: 8px;
display: flex;
flex-direction:column;
align-items: center;
`;

export const TileImage = styled.div`
width: 176px;
height: 231px;
border-radius: 5px;
margin-bottom: 12px;
`;

export const PersonTile = styled.div`
width: 176px;
height: 64px;
gap: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const TileName = styled.div`
width: auto;
height: 29px;
font-size: 22px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};
`;

export const TileRole = styled.div`
width: auto;
height: 27px;
font-size: 18px;
font-weight: 400;
line-height: 150%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.Darkergrey};
`;

export const Person = styled(PersonIcon)`
width: auto;
height: auto;
`;

export const NoMovieIcon = styled(CameraIcon)`
width: 128px;
height: 128px;
stroke-width: 1.5px;
`;

export const Star = styled(StarIcon)`
width: 40px;
height: 40px;
margin-right: 8px;
vertical-align: middle;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    vertical-align: middle;
}
`;

export const Star40px = styled(StarIcon40px)`
width: 40px;
height: 40px;
margin-right: 8px;
vertical-align: middle;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    vertical-align: middle;
}
`;