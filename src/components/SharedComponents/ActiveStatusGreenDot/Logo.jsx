import { Link } from 'react-router-dom';

const Logo = ({ icon = true, animation = true, txtSize = "25px" }) => {
    return (
        <Link to="/">
            <div className="flex items-center flex-shrink-0">
                {icon && (
                    <div
                        className="mr-2"
                        style={{
                            backgroundImage: `url(./nlogo.png)`,
                            width: '35px',
                            height: '35px',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "50%",
                        }}
                    />
                )}
                <span className={`font-weight-bold text-white ${animation ? 'txtLogo' : ''}`}
                    style={{
                        fontFamily: "akronim, cursive",
                        fontSize: txtSize,
                        textShadow: "0 0 24px rgba(0, 212, 200, 0.2)"
                    }}
                >
                    <span style={{ color: "var(--color-primary)" }}>&lt; </span>
                    <span style={{ color: "var(--color-text)" }}>N</span>
                    <span style={{ color: "var(--color-accent-blue)" }}>_</span>
                    <span style={{ color: "var(--color-text)" }}>Ah</span>
                    <span style={{ color: "var(--color-primary-dim)" }}> /</span>
                    <span style={{ color: "var(--color-primary)" }}>&gt;</span>
                </span>
            </div>
        </Link>
    );
}

export default Logo;