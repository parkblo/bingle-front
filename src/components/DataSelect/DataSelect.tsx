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
import ListSubheader from "@mui/material/ListSubheader";

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
        <ListSubheader sx={{ height: "36px", color: "gray" }}>
          Normalised Angular Choice
        </ListSubheader>
        <MenuItem value={"NACH_R400M"}>NACH R400M</MenuItem>
        <MenuItem value={"NAIN_R800M"}>NACH R800M</MenuItem>
        <MenuItem value={"NACH_R1200M"}>NACH R1200M</MenuItem>
        <MenuItem value={"NACH_R1600M"}>NACH R1600M</MenuItem>
        <MenuItem value={"NACH_R2000M"}>NACH R2000M</MenuItem>
        <MenuItem value={"NACH_R3000M"}>NACH R3000M</MenuItem>
        <MenuItem value={"NACH_R5000M"}>NACH R5000M</MenuItem>
        <ListSubheader sx={{ height: "36px", color: "gray" }}>
          Normalised Angular Integration
        </ListSubheader>
        <MenuItem value={"NAIN_R400M"}>NAIN R400M</MenuItem>
        <MenuItem value={"NAIN_R800M"}>NAIN R800M</MenuItem>
        <MenuItem value={"NAIN_R1200M"}>NAIN R1200M</MenuItem>
        <MenuItem value={"NAIN_R1600M"}>NAIN R1600M</MenuItem>
        <MenuItem value={"NAIN_R2000M"}>NAIN R2000M</MenuItem>
        <MenuItem value={"NAIN_R3000M"}>NAIN R3000M</MenuItem>
        <MenuItem value={"NAIN_R5000M"}>NAIN R5000M</MenuItem>
        <ListSubheader sx={{ height: "36px", color: "gray" }}>
          대중교통 편의성
        </ListSubheader>
        <MenuItem value={"BUS_DISTANCE"}>버스정류장 거리</MenuItem>
        <MenuItem value={"SUBWAY_DISTANCE"}>지하철 역 거리</MenuItem>
        <MenuItem value={"STN_AREA"}>역세권 여부</MenuItem>
        <ListSubheader sx={{ height: "36px", color: "gray" }}>
          상권 분석
        </ListSubheader>
        <MenuItem value={"MAIN_SG"}>대표 업종</MenuItem>
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
