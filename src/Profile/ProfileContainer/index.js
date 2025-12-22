import {
Container,
ActorImage,
Description,
Name,
DataTile,
ActorData,
ActorData2,
Data,
Story,
Person,
 } from "./styled";

export const ProfileContainer = () => (
<Container>
    <ActorImage><Person /></ActorImage>
    <Description>
        <Name>Liu Yifei</Name>
        <DataTile>
                    <ActorData></ActorData>
                        <Data>"."</Data>
        </DataTile>
        <DataTile>
                    <ActorData2></ActorData2>
                        <Data>"."</Data>
        </DataTile>       
    </Description>
        <Story>
            Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. 
            She began modeling at the age of 8 and was trained in singing, dancing and the piano. 
            Moving to the United States at 10 with her mother, Liu lived there for four years.
        </Story>
 </Container>
);

export default ProfileContainer;