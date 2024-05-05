import React from "react";
import { NavermapsProvider } from "react-naver-maps";

import "./App.css";
import "./global.css";
import secret from "./secret";
import NaverMapView from "components/NaverMapView/NaverMapView";
import DrawingModeButton from "components/DrawingModeButton/DrawingModeButton";

function App() {
  return (
    <div className="App">
      <NavermapsProvider ncpClientId={secret}>
        <NaverMapView />
        <DrawingModeButton />
      </NavermapsProvider>
    </div>
  );
}

export default App;
