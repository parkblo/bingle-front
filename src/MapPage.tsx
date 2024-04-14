import * as React from "react";
import {
  Container as MapDiv,
  NaverMap,
  useNavermaps,
  Overlay,
  useMap,
} from "react-naver-maps";

import dummyGeoJson from "./dummyGeoJson";

// const dummyGeoJson = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "MultiLineString",
//         coordinates: [
//           [
//             [127.073884, 37.5514706],
//             [127.173884, 37.6514706],
//           ],
//         ],
//       },
//     },
//   ],
// };

// function MyMarkers() {
//   const navermaps = useNavermaps();

//   // 마커를 한번만 생성하기 위해 useState lazy initialize 사용
//   const [marker1] = React.useState(
//     () =>
//       new navermaps.Marker({
//         position: { lat: 37.5666103, lng: 126.9783882 },
//       })
//   );

//   return (
//     <>
//       <Overlay element={marker1} />
//     </>
//   );
// }

function Buttons() {
  // Map의 instance를 가져옵니다.
  const map = useMap();

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <button
        onClick={() => {
          map.data.addGeoJson(dummyGeoJson);
          console.log(dummyGeoJson);
          console.log("addGeoJson");
        }}
      >
        데이터 표시
      </button>
      <button
        onClick={() => {
          map.data.removeGeoJson(dummyGeoJson);
          console.log("removeGeoJson");
        }}
      >
        데이터 삭제
      </button>
      {/* <button
        onClick={() => {
          console.log("center", map.getCenter());
        }}
      >
        현재 위치 로깅
      </button> */}
    </div>
  );
}

function MapPage() {
  const map = useNavermaps();

  return (
    <MapDiv
      style={{
        width: "100%",
        height: 800,
      }}
    >
      <NaverMap defaultCenter={new map.LatLng(37.5514706, 127.073884)}>
        <Buttons />
      </NaverMap>
    </MapDiv>
  );
}

export default MapPage;
