function Tag(props) {
  return (
      <button style={{color: "#fff", backgroundColor: "#FF6060", borderRadius: "10px", height: "25px", minWidth: "115px", border: "none", margin: "0 10px 0 0", padding: "0 15px"}}>
            {props?.name}
      </button>
  )
}

export default Tag;
