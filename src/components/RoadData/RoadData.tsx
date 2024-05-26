import useStore from "components/Store/Store";
import React from "react";

function RoadData() {
  const { centerCoord, radiusData, topN, dataType } = useStore(
    (state) => state
  );

  React.useEffect(() => {
    // 통신 함수 작성
    const requestProps = {
      centerCoord: centerCoord,
      radius: radiusData,
      topNP: topN,
      roadDataType: dataType,
    };
  }, []);

  return <></>;
}

export default RoadData;
