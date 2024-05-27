// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie

//import React, { useState, useEffect } from 'react';
//import { FeatureCollection } from 'geojson';

/*interface Props {
  geojsonData: FeatureCollection;
}*/

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

/*const data = [
  {
    id: "1",
    label: "elixir",
    value: 198,
    color: "hsl(134, 70%, 50%)",
  },
  {
    id: "2",
    label: "lisp",
    value: 400,
    color: "hsl(287, 70%, 50%)",
  },
  {
    id: "3",
    label: "java",
    value: 225,
    color: "hsl(261, 70%, 50%)",
  },
  {
    id: "4",
    label: "php",
    value: 585,
    color: "hsl(324, 70%, 50%)",
  },
  {
    id: "5",
    label: "css",
    value: 364,
    color: "hsl(228, 70%, 50%)",
  },
];

function MyResponsivePie() {
  return (
    <ResponsivePie
      data={data}
      margin={{ right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: 0,
          translateY: 0,
          itemsSpacing: 15,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 20,
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
}*/
import React from 'react';
import { ResponsivePie } from "@nivo/pie";
import usePieChartData from './PieChartData'; 

const colors = {
  A: "0000FF",
  B: "4169E1",
  C: "00BFFF",
  D: "00FFFF",
  E: "00FA9A",
  F: "00FF00",
  G: "7FFF00",
  H: "7CFC00",
  I: "ADFF2F",
  J: "9ACD32",
  K: "FFFF00",
  L: "FFD700",
  M: "FFA500",
  N: "FF4500",
  O: "FF6347",
  P: "FF0000"
};

const MyResponsivePie = () => {
    const data = usePieChartData();
    return (
            <ResponsivePie
                data={data}
                margin={{ right: 100, bottom: 200, left: 100 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                  from: "color",
                  modifiers: [["darker", 0.2]],
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
                fill={[
                    {
                        match: {
                            id: "Traffic_color1|BUS_DIST_COLOR1|SUB_AREA_COLOR0|SUB_DIST_COLOR1|IND_COLOR1"
                        },
                        id: colors.A
                      },
                    {
                        match: {
                            id: "Traffic_color2|BUS_DIST_COLOR2|SUB_AREA_COLOR|SUB_DIST_COLOR2|IND_COLOR2"
                        },
                        id: colors.B
                    },
                    {
                      match: {
                          id: "Traffic_color3|BUS_DIST_COLOR3|SUB_DIST_COLOR3|IND_COLOR3"
                      },
                      id: colors.C
                  },
                  {
                    match: {
                        id: "Traffic_color4|BUS_DIST_COLOR4|SUB_DIST_COLOR4|IND_COLOR4"
                    },
                    id: colors.D
                },
                {
                  match: {
                      id: "Traffic_color5|BUS_DIST_COLOR5|SUB_DIST_COLOR5|IND_COLOR5"
                  },
                  id: colors.E
                },
              {
                match: {
                    id: "Traffic_color6|BUS_DIST_COLOR6|SUB_DIST_COLOR6|IND_COLOR6"
                },
                id: colors.F
                },
              {
                match: {
                    id: "Traffic_color7|BUS_DIST_COLOR7|SUB_DIST_COLOR7|IND_COLOR7"
                },
                id: colors.G
              },
              {
                match: {
                    id: "Traffic_color8|BUS_DIST_COLOR8|SUB_DIST_COLOR8|IND_COLOR8"
                },
                id: colors.H
              },
              {
                match: {
                    id: "Traffic_color9|BUS_DIST_COLOR9|SUB_DIST_COLOR9|IND_COLOR9"
                },
                id: colors.I
              },
              {
                match: {
                    id: "Traffic_color10|BUS_DIST_COLOR10|SUB_DIST_COLOR10|IND_COLOR10"
                },
                id: colors.J
              },
              {
                match: {
                    id: "Traffic_color11"
                },
                id: colors.K
              },
              {
                match: {
                    id: "Traffic_color12"
                },
                id: colors.L
              },
              {
                match: {
                    id: "Traffic_color13"
                },
                id: colors.M
              },
              {
                match: {
                    id: "Traffic_color14"
                },
                id: colors.N
              },
              {
                match: {
                    id: "Traffic_color15"
                },
                id: colors.O
              },
              {
                match: {
                    id: "Traffic_color16"
                },
                id: colors.P
              },
                ]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "column",
                    justify: false,
                    translateX: 0,
                    translateY: 300,
                    itemsSpacing: 15,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 20,
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
}


export default MyResponsivePie;
