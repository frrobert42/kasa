import HousingJson from "../../data/logements.json";
import "./home.scss";
import Banner from "../../components/banner/banner";

function Home() {
    // Display the home page
    return (
    <div id={"home"}>

        <Banner title={"Chez vous, partout et ailleurs"} imageClassName={"home-banner"} />

        <div id={"house-container"}>
        {/* Display all houses */}
        {HousingJson.map((house, index) => (
            <a key={"house: " + index}
               href={"/house/" + house.id}
               style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${house.cover})`}}>
                    <p>{house.title}</p>
            </a>
        ))}

        </div>
    </div>
    );
}

export default Home;
