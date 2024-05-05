import { Container, NaverMap } from "react-naver-maps";

function NaverMapView() {
  return (
    <Container style={{ width: "100%", height: "100vh" }}>
      <NaverMap></NaverMap>
    </Container>
  );
}

export default NaverMapView;
