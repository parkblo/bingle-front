import React from "react";
import Box from "@mui/material/Box";
import styles from "./SearchStyles";
import { TextField, Button } from "@mui/material";

import searchicon from "assets/images/searchicon.png";
import { useMap, useNavermaps } from "react-naver-maps";

function Search() {
  const [searchString, setSearchString] = React.useState("");
  const map = useNavermaps();
  const naverMap = useMap();

  const handleFieldChange = (e: any) => {
    setSearchString(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (!map || !map.Service) {
      alert("지도 인스턴스가 준비되지 않았습니다.");
      return;
    }

    map.Service.geocode(
      {
        address: searchString,
      },
      function (status: any, response: any) {
        if (status !== map.Service.Status.OK) {
          console.log("ERROR!");
          return alert("네이버 지도와 통신이 원활하지 않습니다.");
        }
        if (response.v2.meta.totalCount == 0) {
          return alert("검색 결과가 존재하지 않습니다.");
        }
        const result = response.result;
        const items = result.items;

        naverMap.panTo(new map.LatLng(items[0].point.y, items[0].point.x));
      }
    );
  };

  return (
    <Box sx={styles.searchContainer}>
      <TextField
        variant="standard"
        defaultValue={100}
        value={searchString}
        placeholder="검색할 주소를 입력하세요. 예시) 서울 광진구 능동로 209 "
        onChange={handleFieldChange}
        sx={styles.inputArea}
        InputProps={{ disableUnderline: true }}
        onKeyUp={handleEnter}
      />
      <Button sx={styles.buttonContainer} onClick={handleSearch}>
        <img src={searchicon} style={styles.image} />
      </Button>
    </Box>
  );
}

export default Search;
