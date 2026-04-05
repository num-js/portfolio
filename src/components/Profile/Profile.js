import ScrollingDownAnimation from '../SharedComponents/ScrollingDownAnimation';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ProfileText from './ProfileText/ProfileText';

const PARTICLES = [
    { top: '8%', left: '12%', w: 3, h: 3, delay: '0s', dur: '5s' },
    { top: '22%', left: '78%', w: 2, h: 2, delay: '0.4s', dur: '6s' },
    { top: '36%', left: '5%', w: 2, h: 2, delay: '0.8s', dur: '4s' },
    { top: '55%', left: '88%', w: 3, h: 3, delay: '1.2s', dur: '7s' },
    { top: '70%', left: '22%', w: 2, h: 2, delay: '1.6s', dur: '5s' },
    { top: '82%', left: '60%', w: 2, h: 2, delay: '2s', dur: '6s' },
    { top: '14%', left: '55%', w: 3, h: 3, delay: '0.3s', dur: '4s' },
    { top: '48%', left: '38%', w: 2, h: 2, delay: '0.7s', dur: '7s' },
    { top: '90%', left: '10%', w: 2, h: 2, delay: '1.1s', dur: '5s' },
    { top: '5%', left: '90%', w: 3, h: 3, delay: '1.5s', dur: '6s' },
    { top: '62%', left: '48%', w: 2, h: 2, delay: '1.9s', dur: '4s' },
    { top: '30%', left: '30%', w: 2, h: 2, delay: '0.5s', dur: '7s' },
    { top: '75%', left: '72%', w: 3, h: 3, delay: '0.9s', dur: '5s' },
    { top: '18%', left: '42%', w: 2, h: 2, delay: '1.3s', dur: '6s' },
    { top: '44%', left: '95%', w: 2, h: 2, delay: '1.7s', dur: '4s' },
    { top: '92%', left: '82%', w: 3, h: 3, delay: '2.1s', dur: '7s' },
    { top: '38%', left: '65%', w: 2, h: 2, delay: '0.6s', dur: '5s' },
    { top: '58%', left: '18%', w: 2, h: 2, delay: '1s', dur: '6s' },
];

const Profile = () => {
    return (
        <>
            <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-page pt-header box-border">
                <div className="pointer-events-none absolute left-[-60px] top-0 z-0 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,#1dffe9_0%,transparent_70%)] opacity-60 blur-[100px]" />
                <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] z-0 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(0,130,70,0.4)_0%,transparent_70%)] opacity-60 blur-[100px]" />
                <div className="pointer-events-none absolute inset-0 z-0">
                    {PARTICLES.map((p, i) => (
                        <span
                            key={i}
                            className="absolute rounded-full bg-primary/60"
                            style={{
                                top: p.top,
                                left: p.left,
                                width: p.w,
                                height: p.h,
                                animation: `particle-drift ${p.dur} ease-in-out infinite`,
                                animationDelay: p.delay,
                            }}
                        />
                    ))}
                </div>
                <div className="relative z-[2] mx-auto flex w-full max-w-content flex-row items-center justify-between gap-10 px-10 py-10 max-lg:gap-5 max-lg:px-10 max-md:flex-col max-md:gap-0 max-md:px-5 max-md:pb-20 max-md:pt-8 box-border">
                    <ProfileText />
                    <ProfilePicture />
                </div>
            </div>
            <ScrollingDownAnimation hiddenSection="#experienceLabel" />
        </>
    );
};

export default Profile;
