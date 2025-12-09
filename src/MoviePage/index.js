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
                   <Year>Tu będzie funkcja GetYearFromDate</Year>
                <DataTile>
                    Production:<Data>"."</Data>
                    Release:<Data>"."</Data>
                </DataTile>
                <Tags>
                    <Tag>Tag1</Tag>
                    <Tag>Tag2</Tag>
                </Tags>
                   <RatingContent>
                    <Rating>
                    <Star />7,8
                    </Rating>
                    /10 
                    <Votes>
                    335 votes
                    </Votes>
                    </RatingContent>
                    </MobileOnly>
                   <Story>Bla, bla bla. Bla, bla. Bla, bla.</Story>
                </Description>
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