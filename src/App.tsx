import { NavermapsProvider } from "react-naver-maps";

import "./App.css";
import "./global.css";
import MapPage from "./components/MapPage/MapPage";

function App() {
  return (
    <div className="App">
      <NavermapsProvider
        ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID || ""}
        submodules={["geocoder"]}
      >
        <MapPage />
      </NavermapsProvider>
    </div>
  );
}

export default App;
