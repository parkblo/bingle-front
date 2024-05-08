import colors from "constants/colors";

const styles = {
  searchContainer: {
    width: "360px",
    height: "50px",
    borderRadius: "50px",
    backgroundColor: "white",
    position: "absolute",
    zIndex: "1",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "5",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    alignItems: "center",
  },
  inputArea: {
    width: "300px",
    fontSize: "20px",
  },
  buttonContainer: {
    borderRadius: "50px",
    ".MuiTouchRipple-child": {
      backgroundColor: colors.main,
    },
  },
  image: {
    height: "30px",
    width: "30px",
    marginRight: "5px",
  },
};

export default styles;
