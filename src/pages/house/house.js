import "./house.scss";
import {useParams} from "react-router-dom";
import Stars from "../../components/stars/stars";
import Tag from "../../components/tag/tag";
import NotFound from "../notFound/notFound";
import Dropdown from "../../components/dropdown/dropdown";

function House() {
    const { id } = useParams();
    const housing = JSON.parse(localStorage.getItem("housing"));
    const house = housing?.find(house => house.id === id);

    if (!house) {
        return (
            <NotFound></NotFound>
        )
    }

    return (
        <div className={"house"}>
            <section className={"house-section"}>
                <img className={"house-img"} src={house.cover} alt={house.name || 'image maison'} height={"415"}/>
                <div className={"house-title"}>
                    <h1>{house.title}</h1>
                    <div>
                        <p>{house.host.name}</p>
                        <img src={house.host.picture} alt={house.host.name} width={"64"} height={64}/>
                    </div>
                </div>
                <p className={"location"}>{house.location}</p>
                <div className={"house-tags"}>
                    <div>
                        {
                         house.tags.map((tag, index) => (
                             <Tag key={"tag: " + index} name={tag} />
                         ))
                        }
                    </div>
                    <Stars rate={house.rating}/>
                </div>
            </section>

            <div className={"desc-util"}>
                <Dropdown name={"Description"} text={house.description} />
                <Dropdown name={"Équipements"} text={house.equipments} utility={true}/>
            </div>
        </div>
    );
}

export default House;
