import "./header.scss";
import logo from "../../assets/img/logo.png";
function Header() {
    const home = (window.location.pathname === "/") ? "underline" : "";
    const about = (window.location.pathname === "/about") ? "underline" : "";
    return (
        <header>
            <img id={"header-logo"} src={logo} alt="logo" height={"68"} width={"210"}/>
            <div className={"header-menu"}>
                <a className={"hover-underlined " + home} href={"/"}>Accueil</a>
                <a className={"hover-underlined about " + about} href={"/about"}>A Propos</a>
            </div>
        </header>
    );
}

export default Header;
