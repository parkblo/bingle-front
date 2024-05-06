import {
  useNavermaps,
  useListener,
  Listener,
  useMap,
  Marker,
  Overlay,
} from "react-naver-maps";
import useStore from "components/Store/Store";
import getRadius from "Utils/Utils";
import colors from "constants/colors";
import limits from "constants/limits";

function DrawingTool() {
  const { drawingMode, setDrawingMode } = useStore((state) => state);
  const map = useNavermaps();
  let cnt = 0;
  let firstPoint: any, secondPoint: any;

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
    }
    if (cnt === 1) {
      pointerLine.setPath([firstPoint, e.coord]);
      drawingCircle.setCenter(firstPoint);
      pointerCircle.setCenter(e.coord);

      const rad = getRadius(firstPoint, e.coord);
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
    </>
  );
}

export default DrawingTool;
