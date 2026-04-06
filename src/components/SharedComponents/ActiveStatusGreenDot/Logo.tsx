import { Link } from 'react-router-dom';

type LogoProps = {
    icon?: boolean;
    animation?: boolean;
    txtSize?: number | string;
};

const Logo = ({ icon = true, animation = true, txtSize = '25px' }: LogoProps) => {
    return (
        <Link to="/">
            <div className="flex shrink-0 items-center">
                {icon && (
                    <div
                        className="mr-2 rounded-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(./nlogo.png)`,
                            width: '35px',
                            height: '35px',
                        }}
                    />
                )}
                <span
                    className={`font-akronim font-bold text-white ${animation ? 'relative animate-move-up-down' : ''}`}
                    style={{
                        fontSize: txtSize,
                        textShadow: '0 0 24px rgba(0, 212, 200, 0.2)',
                    }}
                >
                    <span className="text-primary">&lt; </span>
                    <span className="text-white">N</span>
                    <span className="text-accent">_</span>
                    <span className="text-white">Ah</span>
                    <span className="text-primary opacity-75"> /</span>
                    <span className="text-primary">&gt;</span>
                </span>
            </div>
        </Link>
    );
};

export default Logo;
