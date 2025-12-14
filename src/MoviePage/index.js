import { Wrapper, 
         Container, 
         TitleContainer,
         MovieTitle,
         TitleRating,
         TitleRatingContent,
         Layout,
         MovieDetails, 
         MovieTile, 
         Poster,
         Description,
         Title,
         Year,
         Tags,
         Tag,
         RatingContent,
         Rating,
         Votes,
         Story,
         PeopleSection,
         Header, 
         TileSection,
         Tile,
         NoMovieIcon,
         DataTile,
         Data,
         Star,
         TileImage,
         Person,
         TileName,
         TileRole,
         PersonTile,
         Star40px,
         MobileOnly,
         MovieData,
         DataMobileOnly,
          } from "./styled";

export const MoviePage = () => {
    return (
        <Wrapper>
            <Container>
                <TitleContainer>
                    <MovieTitle>Mulan long title</MovieTitle>
                        <TitleRatingContent>
                            <Layout>
                    <TitleRating>
                    <Star40px />7,8
                    </TitleRating>
                             /10</Layout>
                    335 votes
                    </TitleRatingContent>
                </TitleContainer>
            </Container >
            <MovieDetails>
                <MovieTile>
                
                <Poster>
                    <NoMovieIcon />
                </Poster>
                
                <Description>
                    
                    <MobileOnly>
                   <Title>Tytuł</Title>
                   <Year>GetYearFromDate</Year>
               
                <DataTile>
                  <MovieData>Production:</MovieData>
                    <Data>"."</Data>
                  <MovieData>Release date:</MovieData>
                    <Data>"."</Data>
                </DataTile>
                
                <Tags>
                    <Tag>Tag1</Tag>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                </Tags>
                  
                   <RatingContent>
                    <Rating>
                    <Star />7,8
                    </Rating>
                    <DataMobileOnly>
                    /10 
                    </DataMobileOnly>
                    <Votes>
                    335 votes
                    </Votes>
                    </RatingContent>
                    </MobileOnly>
                    </Description>
                   <Story>
                    A young Chinese maiden disguises herself as a male warrior in order to save her father. <br />
                    Disguises herself as a male warrior in order to save her father.  
                    A young Chinese maiden disguises herself as a male warrior in order to save her father.
                   </Story>
                  
                </MovieTile>
                <PeopleSection>
                      <Header>Cast</Header>
                            <TileSection>
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <PersonTile>
                                    <TileName>Liu Yifei</TileName>
                                    <TileRole>Mulan</TileRole>
                                </PersonTile>
                              </Tile> 
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <PersonTile>
                                <TileName>Liu Yifei</TileName>
                                <TileRole>Comandor Shang</TileRole>
                                </PersonTile>
                              </Tile> 
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <TileName></TileName>
                                <TileRole></TileRole>
                              </Tile>
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <TileName></TileName>
                                <TileRole></TileRole>
                              </Tile> 
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <TileName></TileName>
                                <TileRole></TileRole>
                              </Tile> 
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <TileName></TileName>
                                <TileRole></TileRole>
                              </Tile> 
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <TileName></TileName>
                                <TileRole></TileRole>
                              </Tile>
                            </TileSection>
                      <Header>Crew</Header>
                            <TileSection>
                              <Tile>
                                <TileImage><Person /></TileImage>
                                <TileName></TileName>
                                <TileRole></TileRole>
                              </Tile>
                            </TileSection>
                </PeopleSection>
            </MovieDetails>
        </Wrapper>
    );
};

export default MoviePage;