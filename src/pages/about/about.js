import "./about.scss";
import Dropdown from "../../components/dropdown/dropdown";
import Banner from "../../components/banner/banner";

// About text
const aboutText = {
    fiability: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux " +
        "logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
    respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de " +
        "perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à " +
        "nous contacter si vous avez la moindre question.",
    security: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement " +
        "correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au " +
        "locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons " +
        "également des ateliers sur la sécurité domestique pour nos hôtes.",
}

function About() {
    // Display the about page
    return (
        <>
            <Banner imageClassName={"about-banner"} />
            <div className={"dropdown-about"}>
                {/* Display all dropdowns */}
                <Dropdown name={"Fiabilité"} text={aboutText.fiability}></Dropdown>
                <Dropdown name={"Respect"} text={aboutText.respect}></Dropdown>
                <Dropdown name={"Service"} text={aboutText.service}></Dropdown>
                <Dropdown name={"Sécurité"} text={aboutText.security}></Dropdown>
            </div>
        </>

    );
}

export default About;
