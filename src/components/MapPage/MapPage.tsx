import { Container, NaverMap, useNavermaps } from "react-naver-maps";
import DrawingModeButton from "components/DrawingModeButton/DrawingModeButton";
import DataSelect from "components/DataSelect/DataSelect";
import Dashboard from "components/Dashboard/Dashboard";
import Search from "components/Search/Search";
import logo from "assets/images/bingeullogo.png";


function MapPage() {
  const map = useNavermaps();

  return (
    <Container style={{ width: "100%", height: "100vh" }}>
      <NaverMap
        defaultCenter={new map.LatLng(37.5514703, 127.0738831)}
        defaultZoom={15}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            position: "absolute",
            top: 15, 
            left: 20, 
            width: 200, 
            height: "auto", 
            zIndex: 1000,
            borderRadius:30
          }}
        />
        <DrawingModeButton />
        <DataSelect />
        <Dashboard />
        <Search />
      </NaverMap>
    </Container>
  );
}

export default MapPage;
