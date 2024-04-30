function Description({ description }) {
    let descriptionStyle = {
        width: "50%",
        textAlign: "left",
        padding: "0 20px",
        display: "flex",
        flexDirection: "column"
    };
    return (
        <div style={descriptionStyle}>
            <div style={{borderRadius: "10px", background: "#FF6060", color: "#fff", padding: "10px"}}>
                <p>Description</p>
                <div></div>
            </div>
            <div style={{background: "rgba(246, 246, 246, 0.45)", padding: "20px 10px", borderRadius: " 0 10px 10px 0"}}>{description}</div>
        </div>
    );
}

export default Description;
