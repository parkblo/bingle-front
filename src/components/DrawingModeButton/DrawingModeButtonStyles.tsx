import colors from "constants/colors";

const styles = {
  buttonContainer: {
    height: "100px",
    width: "100px",
    position: "absolute",
    bottom: "40px",
    right: "40px",
    backgroundColor: "white",
    borderRadius: "90px",
    boxShadow: "7",
    zIndex: "1",
    "&:hover": {
      backgroundColor: colors.sub,
    },
    ".MuiTouchRipple-child": {
      backgroundColor: colors.main,
    },
  },
  activeButtonContainer: {
    height: "100px",
    width: "100px",
    position: "absolute",
    bottom: "40px",
    right: "40px",
    backgroundColor: colors.sub,
    borderRadius: "90px",
    boxShadow: "7",
    zIndex: "1",
    "&:hover": {
      backgroundColor: colors.sub,
    },
    ".MuiTouchRipple-child": {
      backgroundColor: colors.main,
    },
  },
  image: {
    height: "70px",
    width: "70px",
  },
};

export default styles;
