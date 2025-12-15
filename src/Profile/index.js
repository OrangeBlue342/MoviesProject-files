import {
Wrapper,
Container,
ActorImage,
Description,
Name,
DataTile,
ActorData,
Data,
Story,
PersonSection,
Header,
TileSection,
Tile,
TileImage,
MovieTile,
Title,
Year,
Tags,
Tag, 
RatingContent,
Rating,
Star,
Votes,
Person,
} from "./styled";

export const Profile = () => {
    return (
<Wrapper>
 <Container>
    <ActorImage><Person /></ActorImage>
    <Description>
        <Name>Liu Yifei</Name>
        <DataTile>
                    <ActorData>Date of birth:</ActorData>
                        <Data>"."</Data>
                    <ActorData>Place of birth:</ActorData>
                        <Data>"."</Data>
                </DataTile>
    </Description>
        <Story>
            Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. 
            She began modeling at the age of 8 and was trained in singing, dancing and the piano. 
            Moving to the United States at 10 with her mother, Liu lived there for four years.
        </Story>
 </Container>
 <PersonSection>
  <Header>Cast</Header>
                             <TileSection>
                               <Tile>
                                 <TileImage></TileImage>
                                 <MovieTile>
                                    <Title></Title>
                                    <Year></Year>
                                    <Tags>
                                                <Tag>Tag1</Tag>
                                                <Tag>Action</Tag>
                                                <Tag>Adventure</Tag>
                                            </Tags>
                                                      
                                            <RatingContent>
                                                <Rating>
                                                    <Star />7,8
                                                </Rating>
                                                <Votes>
                                                    335 votes
                                                </Votes>
                                            </RatingContent>
                                 </MovieTile>
                               </Tile> 
                               </TileSection>
                               </PersonSection>
 </Wrapper>
)};

export default Profile;