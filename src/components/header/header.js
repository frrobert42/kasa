import logo from "../../assets/img/logo.png";
import logoSmall from "../../assets/img/logo_small.png";
function Header() {
    let headerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        margin: "0 auto 20px auto",
        maxWidth: "1200px",
    };

    let menuStyle = {
        display: "flex",
        flexDirection: "row",
        textAlign: "right",
    }
    let linkStyle = {
        color: "#000",
        textDecoration: "none",
        fontFamily: "Montserrat",
        fontSize: "24px",
        cursor: "pointer",
    };

    let aboutStyle = {
        ...linkStyle,
        marginLeft: "20px"
    };
    return (
        <header style={headerStyle}>
            <img src={logo} alt="logo" height={"68"} width={"210"}/>
            <img src={logoSmall} alt="logo" className={"d-none"}/>
            <div style={menuStyle}>
                <a style={linkStyle} className={"hover-underlined"} href={"/"}>Accueil</a>
                <a style={aboutStyle} className={"hover-underlined"} href={"/about"}>A Propos</a>
            </div>
        </header>
    );
}

export default Header;
