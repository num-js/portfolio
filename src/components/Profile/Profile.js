
import ScrollingDownAnimation from '../SharedComponents/ScrollingDownAnimation';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ProfileText from './ProfileText/ProfileText';

const Profile = () => {
    return (
        <>
            <div className="App" style={{ background: `url("../backgrounds/bg-circles.svg")`, backgroundPositionX: "-150%", backgroundPositionY: "54%", backgroundRepeat: "inherit" }}>
                <ProfileText />
                <ProfilePicture />
            </div>
            <ScrollingDownAnimation hiddenSection="#experienceLabel" />
        </>
    );
}

export default Profile;