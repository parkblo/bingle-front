import colors from "constants/colors";

const styles = {
  button: {
    height: "60px",
    width: "20px",
    position: "absolute",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "white",
    borderRadius: "40px",
    boxShadow: "7",
    zIndex: "2",
    "&:hover": {
      backgroundColor: colors.sub,
    },
    ".MuiTouchRipple-child": {
      backgroundColor: colors.main,
    },
  },
  image: {
    height: "25px",
    width: "25px",
  },
  dashboardContainer: {
    position: "absolute",
    top: "50%",
    left: "0",
    width: "400px",
    height: "80%",
    backgroundColor: "white",
    transition: "transform 0.2s ease-in-out",
    transform: "translateX(-100%) translateY(-50%)",
    borderRadius: "30px",
    boxShadow: "7",
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    open: {
      position: "absolute",
      top: "50%",
      left: "50px",
      width: "400px",
      height: "80%",
      backgroundColor: "white",
      transition: "transform 0.2s ease-in-out",
      transform: "translateX(0) translateY(-50%)",
      borderRadius: "30px",
      boxShadow: "7",
      zIndex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      overflow: "auto",
    },
  },
};

export default styles;
