import { Wrapper, 
         Container, 
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
         Story,
         Header, 
         Tile,
         NoMovieIcon,
         DataTile,
         Data,
         Star,
          } from "./styled";

export const MoviePage = () => {
    return (
        <Wrapper>
            <Container />
            <MovieDetails>
                <MovieTile>
                <Poster>
                    <NoMovieIcon />
                </Poster>
                <Description>
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
                    /10 335 votes
                    </RatingContent>
                   <Story>Bla, bla bla. Bla, bla. Bla, bla.</Story>
                </Description>
                </MovieTile>
        <Header>Cast</Header>
            <Tile></Tile>
        <Header>Crew</Header>
            <Tile></Tile>
            </MovieDetails>
        </Wrapper>
    );
};

export default MoviePage;