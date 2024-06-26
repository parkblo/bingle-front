import React from "react";
import { ResponsivePie } from "@nivo/pie";
import useStore from "components/Store/Store";
import dummy from "dummy/dummy.json";
import { getColorCode } from "Utils/Utils";

const MyResponsivePie = () => {
  const { roadInfo } = useStore((state) => state);
  const [data, setData] = React.useState([]);
  //const data = usePieChartData();

  React.useEffect(() => {
    async function convertToData(roadInfo: any) {
      if (roadInfo.rangePercentages) {
        let newData = roadInfo.rangePercentages.map((item: any) => {
          return {
            id: item.label,
            label: item.label + " | " + item.percentage,
            value: parseFloat(item.percentage.replace("%", "")),
            color: getColorCode(item.colorId),
          };
        });

        newData.sort((a: any, b: any) => {
          const aId = Number(a.id.split("-")[0]);
          const bId = Number(b.id.split("-")[0]);
          return aId - bId;
        });
        setData(newData);
        console.log(newData);
      }
    }

    console.log(roadInfo);
    convertToData(roadInfo);
  }, [roadInfo]);

  return (
    // TODO: roaddata 없을 시 조건 추가
    <ResponsivePie
      data={data}
      margin={{ top: -250, right: 120, bottom: 200, left: 120 }}
      colors={{ datum: "data.color" }}
      innerRadius={0.4}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLinkLabels={false}
      /*
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      */
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: true,
          // translateX: -20,
          translateY: 80,
          itemsSpacing: 9,
          itemWidth: 200,
          itemHeight: 15,
          itemTextColor: "black",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MyResponsivePie;
