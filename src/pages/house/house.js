import "./house.scss";
import {useNavigate, useParams} from "react-router-dom";
import Stars from "../../components/stars/stars";
import Description from "../../components/description/description";
import Utility from "../../components/utility/utility";
import Tag from "../../components/tag/tag";

function House() {
    const { id } = useParams();
    const housing = JSON.parse(localStorage.getItem("housing"));
    const house = housing?.find(house => house.id === id);
    console.log('house', house);
    const navigate = useNavigate();

    if (!house) {
        navigate('/404');
    }
    return (
        <div className={"house"}>
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
            <div className={"desc-util"}>
                <Description description={house.description}/>
                <Utility utilities={house.equipments}/>
            </div>
        </div>
    );
}

export default House;
