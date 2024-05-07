import {
  useNavermaps,
  useListener,
  Listener,
  useMap,
  Marker,
  Overlay,
} from "react-naver-maps";
import { Box, Button, Divider, TextField } from "@mui/material";
import React from "react";

import useStore from "components/Store/Store";
import getRadius from "Utils/Utils";
import colors from "constants/colors";
import limits from "constants/limits";
import styles from "./DrawingToolStyles";

let currentRad = 0;
let cnt = 0;

function InformationBox() {
  const { radiusData, setRadiusData } = useStore((state) => state);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [fixed, setFixed] = React.useState(false);
  const map = useNavermaps();

  const updateMousePosition = (ev: MouseEvent) => {
    setPosition({ x: ev.clientX, y: ev.clientY });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rad = Number(e.target.value);
    setRadiusData(Math.floor(rad * 100) / 100);
  };

  React.useEffect(() => {
    if (cnt < 2) {
      window.addEventListener("mousemove", updateMousePosition);
      setFixed(false);
    } else {
      setFixed(true);
      window.removeEventListener("mousemove", updateMousePosition);
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [cnt]);

  return (
    <Box
      sx={{
        top: position.y + 20,
        left: position.x + 20,
        ...styles.informationContainer,
      }}
    >
      <Box sx={styles.radiusContainer}>
        <Box sx={styles.labelText}>반경</Box>
        <Box sx={styles.inputArea}>
          {/* {fixed ? (
          <>
            <TextField
              variant="standard"
              defaultValue={currentRad.toFixed(2)}
              value={radiusData}
              onChange={handleChange}
              type="number"
            />
          </>
        ) : (
          currentRad.toFixed(2)
        )} */}
          {currentRad.toFixed(2)}
        </Box>
        <Box sx={styles.labelText}>m</Box>
      </Box>
      <Box sx={styles.buttonContainer}>
        <Button sx={styles.button}>데이터 표시하기</Button>
      </Box>
    </Box>
  );
}

function DrawingTool() {
  const { radiusData, setRadiusData, drawingMode, setDrawingMode } = useStore(
    (state) => state
  );
  const map = useNavermaps();
  let firstPoint: any, secondPoint: any;

  React.useEffect(() => {
    cnt = 0;
    currentRad = 0;
  }, []);

  React.useEffect(() => {
    const testCircle = new map.Circle({
      center: new map.LatLng(37.5514703, 127.0738831),
      radius: radiusData,
      fillColor: colors.sub,
      fillOpacity: 0.15,
      strokeColor: colors.main,
      strokeOpacity: 1,
      strokeWeight: 1,
    });
  }, [radiusData]);

  const pointerCircle = new map.Circle({
    radius: 7,
    fillColor: colors.sub,
    fillOpacity: 0.5,
    strokeColor: colors.main,
    strokeOpacity: 0.5,
    strokeWeight: 5,
  });
  const pointerLine = new map.Polyline({
    strokeColor: colors.main,
    strokeOpacity: 0.5,
    strokeWeight: 5,
  });
  const drawingCircle = new map.Circle({
    radius: 0,
    fillColor: colors.sub,
    fillOpacity: 0.15,
    strokeColor: colors.main,
    strokeOpacity: 1,
    strokeWeight: 1,
  });
  const boundaryCircle = new map.Circle({
    radius: 0,
    strokeColor: "#808080",
    strokeOpacity: 0.7,
    strokeWeight: 3,
    strokeStyle: "dash",
  });
  const midCircle = new map.Circle({
    radius: 7,
    fillColor: colors.sub,
    fillOpacity: 0.5,
    strokeColor: colors.main,
    strokeOpacity: 0.5,
    strokeWeight: 5,
  });
  const dataCircle = new map.Circle({
    radius: 0,
    fillColor: colors.sub,
    fillOpacity: 0.15,
    strokeColor: colors.main,
    strokeOpacity: 1,
    strokeWeight: 1,
  });

  const handleMove = (e: any) => {
    if (cnt === 0) {
      pointerCircle.setCenter(e.coord);
    } else if (cnt === 1) {
      pointerCircle.setVisible(true);
      pointerLine.setVisible(true);
      pointerLine.setPath([firstPoint, e.coord]);
      drawingCircle.setCenter(firstPoint);
      pointerCircle.setCenter(e.coord);

      const rad = getRadius(firstPoint, e.coord);
      currentRad = rad > limits.radius ? limits.radius : rad;

      const drawingCircleRad = rad > limits.radius ? limits.radius : rad;
      drawingCircle.setRadius(drawingCircleRad);
    }
  };

  const handleClick = (e: any) => {
    if (cnt === 0) {
      firstPoint = e.coord;
      dataCircle.setCenter(new map.LatLng(0, 0));
      midCircle.setCenter(firstPoint);
      boundaryCircle.setCenter(firstPoint);
      boundaryCircle.setRadius(limits.radius);
      cnt++;
    } else if (cnt === 1) {
      secondPoint = e.coord;
      const rad = getRadius(firstPoint, secondPoint);
      const dataCircleRad = rad > limits.radius ? limits.radius : rad;
      dataCircle.setCenter(firstPoint);
      dataCircle.setRadius(dataCircleRad);
      currentRad = dataCircleRad;
      setRadiusData(Math.floor(currentRad * 100) / 100);

      pointerCircle.setVisible(false);
      pointerLine.setVisible(false);
      cnt++;
    }
  };

  return (
    <>
      <Overlay element={midCircle} />
      <Overlay element={dataCircle} />
      <Overlay element={pointerCircle} />
      <Overlay element={pointerLine} />
      <Overlay element={drawingCircle} />
      <Overlay element={boundaryCircle} />

      <Listener type="mousemove" listener={handleMove} />
      <Listener type="click" listener={handleClick} />
      <InformationBox />
    </>
  );
}

export default DrawingTool;
