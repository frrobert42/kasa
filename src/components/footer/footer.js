import logoFooter from '../../assets/img/logo_footer.png';
import './footer.scss';

function Footer() {
    return (
    <footer>
        <img src={logoFooter} alt={"logo kasa"} width={"122"} height={"40"}/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
