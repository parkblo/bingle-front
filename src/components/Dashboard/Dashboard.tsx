import React from "react";
import useStore from "components/Store/Store";
import { Box, Button, Typography } from "@mui/material";

import openicon from "assets/images/openicon.png";
import closeicon from "assets/images/closeicon.png";
import styles from "./DashboardStyles";
import nodata from "assets/images/nodata.webp";

import MyResponsivePie from "./PieChart";

function Dashboard() {
  const { dashboardOpen, setDashboardOpen, topN, dataType, roadInfo } =
    useStore((state) => state);

  const getDashboardStyle = () => {
    return dashboardOpen
      ? styles.dashboardContainer.open
      : styles.dashboardContainer;
  };

  const getImageSrc = () => {
    return dashboardOpen ? closeicon : openicon;
  };

  const handleButtonClick = () => {
    setDashboardOpen(!dashboardOpen);
  };

  const getTitle = () => {
    if (dataType.startsWith("NACH_")) {
      return "Normalised Angular Choice";
    } else if (dataType.startsWith("NAIN_")) {
      return "Normalised Angular Integration";
    } else if (dataType === "BUS_DISTANCE") {
      return "Bus Stop Distance";
    } else if (dataType === "SUBWAY_DISTANCE") {
      return "Subway Station Distance";
    } else if (dataType === "STN_AREA") {
      return "역세권 여부";
    } else if (dataType === "MAIN_SG") {
      return "대표 업종";
    }
  };

  const getSubTitle = () => {
    let subTitle = "";

    if (dataType.startsWith("NACH_")) {
      const baseRadius = dataType.split("_")[1].replace("R", "");
      subTitle += `정규화 기준 반경: ${baseRadius} | `;
    } else if (dataType.startsWith("NAIN_")) {
      const baseRadius = dataType.split("_")[1].replace("R", "");
      subTitle += `정규화 기준 반경: ${baseRadius} | `;
    }

    subTitle += `상위 ${topN}% 기준 | 평균: ${roadInfo.average}`;

    return subTitle;
  };

  return (
    <>
      <Button sx={styles.button} onClick={handleButtonClick}>
        <img src={getImageSrc()} style={styles.image} />
      </Button>
      <Box sx={getDashboardStyle()}>
        {roadInfo.rangePercentage.length !== 0 ? (
          <>
            <Typography sx={styles.title}>{getTitle()}</Typography>
            <Typography sx={styles.subTitle}>{getSubTitle()}</Typography>ß
            <MyResponsivePie />
          </>
        ) : (
          <>
            <img src={nodata} style={styles.nodataImage} />
            <Typography>도로 데이터가 표시되지 않았습니다.</Typography>
            <Typography sx={styles.subTitle}>
              우측 하단 버튼을 통해서 데이터 표시를 시작할 수 있어요.
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}

export default Dashboard;
