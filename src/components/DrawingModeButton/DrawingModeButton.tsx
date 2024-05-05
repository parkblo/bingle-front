import { Button } from "@mui/material";
import useStore from "components/Store/Store";

import styles from "./DrawingModeButtonStyles";
import DrawToolImage from "assets/images/drawtool.png";
import DrawingTool from "components/DrawingTool/DrawingTool";

function DrawingModeButton() {
  const { drawingMode, setDrawingMode } = useStore((state) => state);

  const handleClick = () => {
    setDrawingMode(!drawingMode);
  };

  return (
    <>
      <Button sx={styles.buttonContainer} onClick={handleClick}>
        <img src={DrawToolImage} style={styles.image}></img>
      </Button>
      {drawingMode && <DrawingTool />}
    </>
  );
}

export default DrawingModeButton;
