import { Container, 
         TitleContainer,
         MovieTitle,
         TitleRating,
         TitleRatingContent,
         Layout,
         Star40px,
         Votes
        } from "./styled";

export const MovieSection = () => (
<Container>
                <TitleContainer>
                    <MovieTitle>Mulan long title</MovieTitle>
                        <TitleRatingContent>
                            <Layout>
                    <TitleRating>
                    <Star40px />7,8
                    </TitleRating>
                             /10</Layout>
                    <Votes>
                    335 votes
                    </Votes>
                    </TitleRatingContent>
                </TitleContainer>
            </Container >
);

export default MovieSection;