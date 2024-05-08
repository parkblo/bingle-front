import { transform } from "typescript";

const styles = {
  selectContainer: {
    width: "350px",
    height: "50px",
    borderRadius: "50px",
    backgroundColor: "white",
    position: "absolute",
    zIndex: "1",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  select: {
    width: "150px",
    height: "80%",
  },
  image: {
    height: "30px",
    width: "30px",
    marginRight: "5px",
  },
  labelText: { fontSize: "12px" },
  inputArea: {
    width: "45px",
    fontSize: "20px",
    marginLeft: "10px",
    marginRight: "10px",
  },
};

export default styles;
