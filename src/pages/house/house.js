import "./house.scss";
import {useParams} from "react-router-dom";
import Stars from "../../components/stars/stars";
import Tag from "../../components/tag/tag";
import NotFound from "../notFound/notFound";
import Dropdown from "../../components/dropdown/dropdown";
import Carousel from "../../components/carousel/carousel";

function House() {
    // Get the id from the URL
    const { id } = useParams();
    // Get the housing from the local storage
    const housing = JSON.parse(localStorage.getItem("housing"));
    // Find the house with the id
    const house = housing?.find(house => house.id === id);

    // If the house is not found, display a 404 page
    if (!house) {
        return (
            <NotFound></NotFound>
        )
    }

    return (
        <div className={"house"}>
            <section className={"house-section"}>
                {/* Display the carousel */}
                <Carousel images={house.pictures}/>

                {/* Display the title, location, tags, host and stars */}
                <div className={"house-details"}>

                    <div className={"house-title"}>
                        <h1>{house.title}</h1>
                        <div className={""}>
                            <p className={"location"}>{house.location}</p>
                            <div className={"house-tags"}>
                                <div>
                                    {/* Display all tags */}
                                    {
                                        house.tags.map((tag, index) => (
                                            <Tag key={"tag: " + index} name={tag}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"house-host-stars"}>
                        {/* Display the host */}
                        <div className={"house-host"}>
                            <p>{house.host.name}</p>
                            <img src={house.host.picture} alt={house.host.name} width={"64"} height={64}/>
                        </div>
                        {/* Display the stars */}
                        <div className={"stars"}>
                            <Stars rate={house.rating}/>
                        </div>
                    </div>

                </div>
            </section>

            {/* Display the description and the equipments */}
            <div className={"desc-util"}>
                <Dropdown name={"Description"} text={house.description} />
                <Dropdown name={"Équipements"} text={""} utility={house.equipments}/>
            </div>

        </div>
    );
}

export default House;
