import React from "react";
import useStore from "components/Store/Store";
import { Box, Button, Typography } from "@mui/material";

import openicon from "assets/images/openicon.png";
import closeicon from "assets/images/closeicon.png";
import styles from "./DashboardStyles";

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
      return "Normalized Angular Choice";
    } else if (dataType.startsWith("NAIN_")) {
      return "Normalized Angular Integration";
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

  return (
    <>
      <Button sx={styles.button} onClick={handleButtonClick}>
        <img src={getImageSrc()} style={styles.image} />
      </Button>
      <Box sx={getDashboardStyle()}>
        {/* <Typography sx={styles.subTitle}>Dashboard</Typography> */}
        <Typography sx={styles.title}>{getTitle()}</Typography>
        <Typography sx={styles.subTitle}>
          상위 {topN}% 기준 | 평균: {roadInfo.average}
        </Typography>
        <MyResponsivePie />
      </Box>
    </>
  );
}

export default Dashboard;
