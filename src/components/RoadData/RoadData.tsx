import getRoadData from "api/api";
import useStore from "components/Store/Store";
import React from "react";
import { useMap } from "react-naver-maps";

import dummy from "dummy/dummy.json";
import { convertToGeoJson } from "Utils/Utils";

function RoadData() {
  const [roadData, setRoadData] = React.useState();
  const { centerCoord, radiusData, topN, dataType, drawingMode } = useStore(
    (state) => state
  );
  const requestProps = {
    centerCoord: centerCoord,
    radius: radiusData,
    topNP: topN,
    roadDataType: dataType,
  };
  const map = useMap();

  /*
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getRoadData(requestProps);
      setRoadData(data);
    };

    fetchData();
  }, [requestProps]);

  React.useEffect(() => {
    if (roadData) {
      console.log(roadData);
      // addGeoJson 하기 전에 roadData 내 스타일을 반영해야한다.
      map.data.addGeoJson(roadData, true);
    }
  }, [roadData]);
  */

  React.useEffect(() => {
    console.log("시작");
    map.data.addGeoJson(convertToGeoJson(dummy), true);

    return () => {
      console.log("종료");
      map.data.removeGeoJson(convertToGeoJson(dummy));
    };
  }, []);
  return <></>;
}

export default RoadData;
