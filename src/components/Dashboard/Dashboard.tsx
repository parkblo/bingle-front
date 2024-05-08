import React from "react";
import useStore from "components/Store/Store";
import { Box, Button, Typography } from "@mui/material";

import openicon from "assets/images/openicon.png";
import closeicon from "assets/images/closeicon.png";
import styles from "./DashboardStyles";

import MyResponsivePie from "./PieChart";

function Dashboard() {
  const { dashboardOpen, setDashboardOpen } = useStore((state) => state);

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

  return (
    <>
      <Button sx={styles.button} onClick={handleButtonClick}>
        <img src={getImageSrc()} style={styles.image} />
      </Button>
      <Box sx={getDashboardStyle()}>
        <MyResponsivePie />
      </Box>
    </>
  );
}

export default Dashboard;
