import HousingJson from "../../data/logements.json";
import "./home.scss";

function Home() {
    // Display the home page
    return (
    <div id={"home"}>
        <div id="banner">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div id={"house-container"}>
        {/* Display all houses */}
        {HousingJson.map((house, index) => (
            <a key={"house: " + index} href={"/house/" + house.id}
               style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${house.cover})`}}>
                    <p>{house.title}</p>
            </a>
        ))}

        </div>
    </div>
    );
}

export default Home;
