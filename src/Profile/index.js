import ProfileContainer from "./ProfileContainer";
import ProfileMovies from "./ProfileMovies";
import { Wrapper } from "./styled";

export const Profile = () => {
    return (
<Wrapper>
    <ProfileContainer />
          <ProfileMovies />          
 </Wrapper>
)};

export default Profile;