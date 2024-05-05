import { Button } from "@mui/material";

import styles from "./DrawingModeButtonStyles";
import DrawToolImage from "assets/images/drawtool.png";

function DrawingModeButton() {
  return (
    <Button sx={styles.buttonContainer}>
      <img src={DrawToolImage} style={styles.image}></img>
    </Button>
  );
}

export default DrawingModeButton;
