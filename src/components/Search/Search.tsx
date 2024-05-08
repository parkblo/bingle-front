import React from "react";
import Box from "@mui/material/Box";
import styles from "./SearchStyles";
import { TextField, Button } from "@mui/material";

import searchicon from "assets/images/searchicon.png";

function Search() {
  const [searchString, setSearchString] = React.useState("");

  const handleFieldChange = (e: any) => {
    setSearchString(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      console.log(searchString);
    }
  };

  return (
    <Box sx={styles.searchContainer}>
      <TextField
        variant="standard"
        defaultValue={100}
        value={searchString}
        placeholder="검색할 주소를 입력하세요"
        onChange={handleFieldChange}
        sx={styles.inputArea}
        InputProps={{ disableUnderline: true }}
        onKeyUp={handleEnter}
      />
      <Button sx={styles.buttonContainer}>
        <img src={searchicon} style={styles.image} />
      </Button>
    </Box>
  );
}

export default Search;
