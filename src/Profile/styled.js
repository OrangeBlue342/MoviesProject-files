import styled from "styled-components";
import { ReactComponent as StarIcon } from "../images/shape-star.svg";
import { ReactComponent as PersonIcon } from "../images/Person.svg";

export const Wrapper = styled.div`
max-width: 1920px;
width: auto;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 0 16px;
}
`;

export const Container = styled.div`
max-width: 1368px;
width: 100%;
height: 644px;
margin-left: 276px;
margin-right: 276px;
margin-top: 56px;
margin-bottom: 64px;
background-color: ${({ theme }) => theme.colors.white};
padding: 40px;
gap: 10px;

display: grid;
grid-template-columns: auto 1fr;
grid-template-rows: auto 1fr;
grid-template-areas:
    "image description"
    "image story";
grid-column-gap: 40px;

`;

export const ActorImage = styled.div`
width: 399px;
height: 564px;
border-radius: 5px;
grid-area: image;
`;

export const Description = styled.article`
max-width: 849px;
height: 145px;
padding-top: 8px;
padding-bottom: 8px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 24px;
grid-area: description;
`;

export const Name = styled.header`
width: auto;
height: 43px;
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
`;

export const DataTile = styled.ul`
width: auto;
height: 52px;
padding: 0;
display: grid;
grid-template-columns: 122px 102px;
column-gap: 8px;
row-gap: 8px;
margin-top: 0px;
margin-bottom: 4px;
list-style: none;
color: ${({ theme }) => theme.colors.waterloo};
`;

export const ActorData= styled.li`
height: 22px;
font-size: 18px;
font-weight: 400;
line-height: 120%
letter-spacing 0px;
color: ${({ theme }) => theme.colors.waterloo};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    display: none;
}
`;

export const Data = styled.li`
width: auto;
height: 22px;
font-size: 18px;
font-weight: 400;
line-height: 120%
letter-spacing 0px;
display: flex;
align-items: flex-start;
color: ${({ theme }) => theme.colors.black};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 16px;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors.black};
}
`;

export const Story = styled.div`
width: auto;
height: 96px;
word-break: break-word;
grid-area: story;
`;

export const PersonSection = styled.section`
width: 1368px;
height: 717px;
margin: 0 auto;
margin-bottom: 64px;
`;

export const Header = styled.header`
width: auto;
height: 43px;
margin-bottom: 24px;
font-size: 36px;
font-weight: 600;
line-height: 120%;
letter-spacing: 0px;
`;

export const TileSection = styled.div`
display: grid;
grid-template-columns: repeat(4, 324px);
grid-gap: 24px;
margin-bottom: 64px;
justify-content: center;
`;

export const Tile = styled.div`
width: 324px;
height: 650px;
border-radius: 5px;
background-color: ${({ theme }) => theme.colors.white};
box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
padding: 16px;
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 136px;
    height: 245px;
    padding: 8px;
    margin-bottom: 4px;
}
`;

export const TileImage = styled.div`
width: 292px;
height: 434px;
border-radius: 5px;
margin-bottom: 12px;
background-color: ${({ theme }) => theme.colors.waterloo};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 120px;
    height: 178px;
    border-radius: 5px;
    margin-bottom: 8px;
}
`;

export const MovieTile = styled.div`
width: 292px;
height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

export const Title = styled.header`
width: auto;
height: auto;
font-size: 22px;
font-weight: 500;
line-height: 130%;
letter-spacing: 0px;
margin-bottom: 8px;
`;

export const Year = styled.div`
width: auto;
height: 24px;
font-size: 16px;
font-weight: 400;
line-height: 150%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.Darkergrey};
`;

export const Tags = styled.ul`
width: auto;
height: 36px;
display: flex;
flex-wrap: wrap;
flex-direction: row;
gap: 8px;
padding-inline-start: 0;
list-style: none;
margin-top: 16px;
margin-bottom: 4px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: auto;
    gap: 4px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    }
`;

export const Tag = styled.li`
width: auto;
height: 36px;
background-color: ${({ theme }) => theme.colors.mystic};
padding: 8px 16px;
border-radius: 5px;
font-size: 14px;
font-weight: 400;
line-height: 140%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.black};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 19px;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 10px;
}
`;

export const RatingContent = styled.div`
width: 292px;
height: 24px;
font-size: 16px;
font-weight: 400;
line-height: 150%;
letter-spacing: 0px;
color: ${({ theme }) => theme.colors.Darkergrey};
margin-top: auto;
gap: 12px;

display: flex;
flex-direction: row;
align-items: center;
align-self: flex-end;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 13px;
    line-height: 130%;
    letter-spacing: 0px;
    color: ${({ theme }) => theme.colors.Darkergrey};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
`;

export const Rating = styled.div`
width: auto;
height: 24px;
font-size: 16px;
font-weight: 600;
line-height: 150%;
letter-spacing: 0px;

color: ${({ theme }) => theme.colors.black};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: auto;
    height: 24px;
    font-size: 13px;
    font-weight: 600;
    line-height: 130%;
    letter-spacing: 0px;
    margin-right: 4px;
    display: flex;
    align-items: center;
}
`;

export const Votes = styled.p`

`;

export const Star = styled(StarIcon)`
width: 24px;
height: 24px;
margin-right: 8px;
vertical-align: middle;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    vertical-align: middle;
}
`;

export const Person = styled(PersonIcon)`
width: 399px;
height: 564px;

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) { 
    width: 120px;
    height: 178px;
    margin-top: 0px;
}
`;