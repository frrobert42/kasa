import HousingJson from "../../data/logements.json";
import "./home.scss";

function Home() {
    return (
    <div id={"home"}>
        <div id="banner">
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div id={"house-container"}>
        {HousingJson.map((house, index) => (
            <a key={"house: " + index} href={"/house/" + house.id}>
                    <p>{house.title}</p>
            </a>
        ))}

        </div>
    </div>
    );
}

export default Home;
