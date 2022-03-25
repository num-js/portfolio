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
                <span class={`font-weight-bold text-white ${animation ? 'txtLogo' : ''}`}
                    style={{
                        fontFamily: "akronim, cursive",
                        fontSize: txtSize,
                        textShadow: "1px 10px 10px black"
                    }}
                >
                    <span style={{ color: "#00ff37" }}>&lt; </span>
                    <span style={{ color: "#ff9900" }}>N</span>
                    <span style={{ color: "blue" }}>_</span>
                    <span style={{ color: "#ff9900" }}>Ah</span>
                    <span style={{ color: "white" }}> /</span>
                    <span style={{ color: "#00ff37" }}>&gt;</span>
                </span>
            </div>
        </Link>
    );
}

export default Logo;