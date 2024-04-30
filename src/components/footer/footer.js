import logoFooter from '../../assets/img/logo_footer.png';
function Footer() {
    let footerStyle = {
        backgroundColor: "#000000",
        color: "#FFFFFF",
        textAlign: "center",
        margin: "40px 0 0 0",
        padding: "66px 0 29px 0",
        width: "100%",
        height: "140px"
    };
    return (
    <footer style={footerStyle}>
        <img src={logoFooter} alt={"logo kasa"} width={"122"} height={"40"}/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
