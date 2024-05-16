function Utility({utilities}) {
    console.log('utilities', utilities);
    let utilitiesStyle = {
        width: "50%",
        textAlign: "left",
        padding: "10px 20px",
        fontSize: "18px",
        lineHeight: "142%",
    };
    return (
        <div style={{display: "flex", flexDirection: "column", textAlign: "left", width: "50%"}}>
            <div style={{background: "#FF6060", borderRadius: "10px", color: "#fff", padding: "0 10px"}}>
                <p>Équipements</p>
                <div></div>
            </div>
            <div style={utilitiesStyle}>
                {
                    utilities?.map((utility, index) => (
                        <div key={'key : ' + index}>{utility}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default Utility;
