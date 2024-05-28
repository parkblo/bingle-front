import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Divider, TextField } from "@mui/material";
import styles from "./DataSelectStyles";
import useStore from "components/Store/Store";
import dataicon from "assets/images/dataicon.png";

function DataSelect() {
  const { dataType, setDataType, topN, setTopN } = useStore((state) => state);

  const handleSelectChange = (event: SelectChangeEvent) => {
    setDataType(event.target.value as string);
  };

  const handleFieldChange = (e: any) => {
    let changeTopN = Math.floor(Number(e.target.value));
    if (changeTopN < 0) {
      changeTopN = 0;
    } else if (changeTopN > 100) {
      changeTopN = 100;
    }
    setTopN(changeTopN);
  };

  return (
    <Box sx={styles.selectContainer}>
      <img src={dataicon} style={styles.image} />
      <Select
        value={dataType}
        onChange={handleSelectChange}
        variant="standard"
        disableUnderline
        sx={styles.select}
      >
        <MenuItem value={"NACH_R400M"}>NACH</MenuItem>
        <MenuItem value={"NAIN_R400M"}>NAIN</MenuItem>
        <MenuItem value={"BUS_DISTANCE"}>버스정류장 거리</MenuItem>
        <MenuItem value={"SUBWAY_DISTANCE"}>지하철 역 거리</MenuItem>
        <MenuItem value={"STN_AREA"}>역세권 여부</MenuItem>
        <MenuItem value={"MAIN_SG"}>대표업종</MenuItem>
      </Select>
      <Box sx={{ marginLeft: "20px" }}></Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ marginLeft: "20px" }}></Box>
      <Box sx={styles.labelText}>상위</Box>
      <TextField
        variant="standard"
        defaultValue={100}
        value={topN}
        onChange={handleFieldChange}
        type="number"
        sx={styles.inputArea}
      />
      <Box sx={styles.labelText}>%</Box>
    </Box>
  );
}
export default DataSelect;
