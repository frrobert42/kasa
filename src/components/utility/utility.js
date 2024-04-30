function Utility({utilities}) {
    let utilitiesStyle = {
        width: "50%",

    };
    return (
        <div style={utilitiesStyle}>
                {
                    utilities?.map((utility, index) => (
                        <p key={index}>{utility}</p>
                    ))
                }
        </div>
    );
}

export default Utility;
