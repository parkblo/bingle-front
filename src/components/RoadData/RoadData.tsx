import getRoadData from "api/api";
import useStore from "components/Store/Store";
import React from "react";
import { useMap } from "react-naver-maps";

import dummy from "dummy/dummy.json";
import { convertToGeoJson } from "Utils/Utils";

interface RequestProps {
  centerCoord: {
    latitude: number;
    longitude: number;
  };
  radius: number;
  topNP: number;
  roadDataType: string;
}

function RoadData() {
  const [roadData, setRoadData] = React.useState();
  const [requestProps, setRequestProps] = React.useState<RequestProps>();
  const { centerCoord, radiusData, topN, dataType } = useStore(
    (state) => state
  );
  const map = useMap();

  React.useEffect(() => {
    setRequestProps({
      centerCoord: {
        latitude: centerCoord.latitude,
        longitude: centerCoord.longitude,
      },
      radius: radiusData,
      topNP: topN,
      roadDataType: dataType,
    });
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      console.log(requestProps);
      const data = await getRoadData(requestProps);
      setRoadData(data);
    };

    if (requestProps) {
      fetchData();
    }
  }, [requestProps]);

  React.useEffect(() => {
    if (roadData) {
      console.log("표시시작");
      console.log(roadData);
      const geoJson = convertToGeoJson(roadData);
      console.log(geoJson);
      map.data.addGeoJson(geoJson, true);
    }

    return () => {
      console.log("표시종료");
      if (roadData) {
        map.data.removeGeoJson(convertToGeoJson(roadData));
      }
    };
  }, [roadData]);

  /*
  React.useEffect(() => {
    console.log("시작");
    map.data.addGeoJson(convertToGeoJson(dummy), true);

    return () => {
      console.log("종료");
      map.data.removeGeoJson(convertToGeoJson(dummy));
    };
  }, []);
  */
  return <></>;
}

export default RoadData;
