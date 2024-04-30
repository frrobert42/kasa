function Stars({ rate }) {
    return (
        <div>
            {Array.from({ length: 5 }, (_, index) => {
                const star = index + 1;
                return (
                    <span key={index}>
                        {star <= rate ? "★" : "☆"}
                    </span>
                );
            })}
        </div>
    );
}

export default Stars;
