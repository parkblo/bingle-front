import { NavermapsProvider } from "react-naver-maps";

import "./App.css";
import "./global.css";
import secret from "./secret";
import MapPage from "./components/MapPage/MapPage";

function App() {
  return (
    <div className="App">
      <NavermapsProvider ncpClientId={secret} submodules={["geocoder"]}>
        <MapPage />
      </NavermapsProvider>
    </div>
  );
}

export default App;
