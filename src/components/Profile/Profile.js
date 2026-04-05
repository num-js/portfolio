import ScrollingDownAnimation from '../SharedComponents/ScrollingDownAnimation';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ProfileText from './ProfileText/ProfileText';
import './profile.scss';

const Profile = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-bg-glow hero-bg-glow--left"></div>
                <div className="hero-bg-glow hero-bg-glow--right"></div>
                <div className="hero-particles">
                    {Array.from({ length: 18 }).map((_, i) => (
                        <span key={i} className={`particle particle--${i % 5}`}></span>
                    ))}
                </div>
                <div className="hero-content">
                    <ProfileText />
                    <ProfilePicture />
                </div>
            </div>
            <ScrollingDownAnimation hiddenSection="#experienceLabel" />
        </>
    );
};

export default Profile;
