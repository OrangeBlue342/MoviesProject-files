import { Wrapper, 
         Container, 
         MovieDetails, 
         Description, 
         MoviePoster,
         MovieTitle,
         MovieYear,
         MovieProduction,
         MovieDate,
         MovieGenre,
         MovieRating,
         Story,
         Header, 
         Tile,
         NoMovieIcon,
          } from "./styled";

export const MoviePage = () => {
    return (
        <Wrapper>
            <Container />
            <MovieDetails>
                <Description>
                <MoviePoster>
                    <NoMovieIcon />
                </MoviePoster>
                <MovieTitle />
                <MovieYear />
                <MovieProduction>Production: "."</MovieProduction>
                <MovieDate>Release: "."</MovieDate>
                <MovieGenre>tu będą pobierane tagi</MovieGenre>
                <MovieRating>Rating: "."</MovieRating>
                <Story>Bla, bla bla. Bla, bla. Bla, bla.</Story>
                </Description>
                <Header>Cast</Header>
                <Tile></Tile>
                <Header>Crew</Header>
                <Tile></Tile>
            </MovieDetails>
        </Wrapper>
    );
};