import React from "react";
import { Container, NaverMap, NavermapsProvider } from "react-naver-maps";

import "./App.css";
import "./global.css";
import secret from "./secret";

function App() {
  return (
    <div className="App">
      <NavermapsProvider ncpClientId={secret}>
        <h1>hello naver maps</h1>
        <Container style={{ width: "100%", height: "100vh" }}>
          <NaverMap></NaverMap>
        </Container>
      </NavermapsProvider>
    </div>
  );
}

export default App;
