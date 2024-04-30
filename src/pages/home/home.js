import background from "../../assets/img/home.png";
import HousingJson from "../../data/logements.json";
function Home() {
    let homeStyle = {minHeight: "calc(100vh - 109px - 235px)",};
    let bannerStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "223px",
        maxWidth: "1240px",
        width: "100%",
        margin: "0 auto 43px auto",
    }
    let h1Style = {
        color: "#fff",
        margin: "auto",
        paddingTop: "78px"
    };

    let containerStyle = {
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "56px 50px 43px 50px",
        borderRadius: "25px",
        background: "#F6F6F6",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "60px 50px"
    }
    let houseStyle = {
        display: "block",
        width: "340px",
        height: "340px",
        borderRadius: "10px",
        background: "linear-gradient(180deg, rgba(255,96,96,1) 0%, rgba(255,96,96,1) 42%, rgba(190,96,96,1) 100%)",
        cursor: "pointer"
    }
    return (
    <div style={homeStyle}>
        <div style={bannerStyle}>
            <h1 style={h1Style}>Chez vous, partout et ailleurs</h1>
        </div>
        <div style={containerStyle}>
        {HousingJson.map((house, index) => (
            <a style={houseStyle} key={index} href={"/house/" + house.id}>
                    <p style={{margin: "268px 20px 20px 20px", color: "#fff", fontStyle: "18px", textAlign: "left"}}>
                        {house.title}
                    </p>
            </a>
        ))}

        </div>
    </div>
    );
}

export default Home;
