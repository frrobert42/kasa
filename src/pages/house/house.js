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
        <div style={{maxWidth: "1240px", margin: "0 auto"}}>
            <img src={house.cover} alt={house.name || 'image maison'} height={"415"} style={{width: "100%", objectFit: "cover"}}/>
            <div style={{display: "flex", flexWrap: "nowrap", flexDirection: "row", justifyContent: "space-between"}}>
                <h1 style={{color: "#FF6060", fontFamily: "Montserrat", fontSize: "36px", textAlign: "left", paddingRight: "50px", marginBottom: "0"}}>
                    {house.title}
                </h1>
                <div style={{display: "flex", flexWrap: "nowrap", flexDirection: "row", marginTop: "20px"}}>
                    <p style={{color: "#FF6060"}}>{house.host.name}</p>
                    <img src={house.host.picture} alt={house.host.name} style={{borderRadius: "50%", margin: "0 10px"}} width={"64"} height={64}/>
                </div>
            </div>
            <p style={{textAlign: "left", marginTop: "0"}}>{house.location}</p>
            <div style={{display: "flex", flexWrap: "nowrap", flexDirection: "row", justifyContent: "space-between"}}>
                <div style={{textAlign: "left"}}>
                    {
                     house.tags.map((tag, index) => (
                         <Tag key={index} name={tag} />
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
