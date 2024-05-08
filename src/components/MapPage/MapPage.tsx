import { Container, NaverMap, useNavermaps } from "react-naver-maps";
import DrawingModeButton from "components/DrawingModeButton/DrawingModeButton";
import DataSelect from "components/DataSelect/DataSelect";
import Dashboard from "components/Dashboard/Dashboard";
import Search from "components/Search/Search";

function MapPage() {
  const map = useNavermaps();

  return (
    <Container style={{ width: "100%", height: "100vh" }}>
      <NaverMap
        defaultCenter={new map.LatLng(37.5514703, 127.0738831)}
        defaultZoom={15}
      >
        <DrawingModeButton />
        <DataSelect />
        <Dashboard />
        <Search />
      </NaverMap>
    </Container>
  );
}

export default MapPage;
