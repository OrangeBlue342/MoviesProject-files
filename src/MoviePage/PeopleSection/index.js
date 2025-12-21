import {
             PeopleSection,
             Header, 
             TileSection,
             Tile,
             TileImage,
             Person,
             TileName,
             TileRole,
             PersonTile,
} from "./styled";

export const Cast = () => (
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
);

export default Cast;