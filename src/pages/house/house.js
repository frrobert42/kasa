import {useParams} from "react-router-dom";
import Stars from "../../components/stars/stars";
import Description from "../../components/description/description";
import Utility from "../../components/utility/utility";

function House() {
    const { id } = useParams();
    const housing = JSON.parse(localStorage.getItem("housing"));
    const house = housing?.find(house => house.id === id);
    console.log('house', house);
    if (!house) {
        return (
            <div>
                <h1>Logement non trouvé</h1>
            </div>
        );
    }
    return (
        <div>
            <img src={house.cover} alt={house.name || 'image maison'} />
            <div style={{display: "flex", flexWrap: "nowrap", flexDirection: "row"}}>
                <h1 style={{color: "#FF6060", fontFamily: "Montserrat", fontSize: "36px"}}>
                    {house.title}
                </h1>
                <div style={{display: "flex", flexWrap: "nowrap", flexDirection: "row"}}>
                    <p>{house.host.name}</p>
                    <img src={house.host.picture} alt={house.host.name} style={{borderRadius: "50%"}}/>
                </div>
            </div>
            <div>{house.location}</div>
            <div>
                <div>
                    {
                     house.tags.map((tag, index) => (
                         <span key={index}>{tag}</span>
                     ))
                    }
                </div>
                <Stars rate={house.rating}/>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Description description={house.description}/>
                <Utility utilities={house.equipments}/>
            </div>
        </div>
    );
}

export default House;
