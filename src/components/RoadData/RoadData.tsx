import useStore from "components/Store/Store";
import React from "react";

function RoadData() {
  const { centerCoord, radiusData, topN, dataType } = useStore(
    (state) => state
  );

  React.useEffect(() => {
    console.log({
      centerCoord: centerCoord,
      radius: radiusData,
      topNP: topN,
      roadDataType: dataType,
    });
  }, []);

  return <></>;
}

export default RoadData;
