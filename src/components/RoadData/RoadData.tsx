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

interface RangePercentage {
  start: number;
  end: number;
  percentage: number;
}

interface Info {
  average: number;
  rangePercentage: RangePercentage[];
}

interface Road {
  coords: string;
  colorId: string;
}

interface RoadDataTypes {
  roads: Road[];
  info: Info;
}

function RoadData() {
  const [roadData, setRoadData] = React.useState<RoadDataTypes | null>(null);
  const [requestProps, setRequestProps] = React.useState<RequestProps>();
  const { centerCoord, radiusData, topN, dataType, setRoadInfo } = useStore(
    (state: any) => state
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
      setRoadInfo(roadData.info);
      const geoJson = convertToGeoJson(roadData);
      map.data.addGeoJson(geoJson, true);
    }

    return () => {
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
