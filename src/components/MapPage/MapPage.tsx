import { Container, NaverMap, useNavermaps } from "react-naver-maps";
import DrawingModeButton from "components/DrawingModeButton/DrawingModeButton";

function MapPage() {
  const map = useNavermaps();

  return (
    <Container style={{ width: "100%", height: "100vh" }}>
      <NaverMap
        defaultCenter={new map.LatLng(37.5514703, 127.0738831)}
        defaultZoom={15}
      >
        <DrawingModeButton />
      </NaverMap>
    </Container>
  );
}

export default MapPage;
