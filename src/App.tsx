import { NavermapsProvider } from "react-naver-maps";
import "./App.css";

import secret from "./secret";
import MapPage from "./MapPage";

function App() {
  return (
    <NavermapsProvider ncpClientId={secret}>
      <MapPage />
    </NavermapsProvider>
  );
}

export default App;
