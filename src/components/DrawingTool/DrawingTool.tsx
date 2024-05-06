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

function DrawingTool() {
  const { drawingMode, setDrawingMode } = useStore((state) => state);
  const map = useNavermaps();
  let cnt = 0;
  let firstPoint: any, secondPoint: any;

  let midCircle = new map.Circle({
    center: new map.LatLng(0, 0),
    radius: 7,
    fillColor: colors.sub,
    fillOpacity: 0.5,
    strokeColor: colors.main,
    strokeOpacity: 0.5,
    strokeWeight: 5,
  });
  let dataCircle = new map.Circle({
    center: new map.LatLng(0, 0),
    radius: 0,
    fillColor: colors.sub,
    fillOpacity: 0.15,
    strokeColor: colors.main,
    strokeOpacity: 1,
    strokeWeight: 1,
  });

  const handleClick = (e: any) => {
    if (cnt === 0) {
      firstPoint = e.coord;
      dataCircle.setCenter(new map.LatLng(0, 0));
      midCircle.setCenter(firstPoint);
      cnt++;
    } else {
      secondPoint = e.coord;
      const rad = getRadius(firstPoint, secondPoint);
      dataCircle.setCenter(firstPoint);
      dataCircle.setRadius(rad);
      cnt = 0;
    }
  };

  return (
    <>
      <Overlay element={midCircle} />
      <Overlay element={dataCircle} />
      <Listener type="click" listener={handleClick} />
    </>
  );
}

export default DrawingTool;
