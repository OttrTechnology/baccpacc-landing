import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./routes/home/home";
import MobileApp from "./routes/app/app";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<MobileApp />} />
    </Routes>
  );
}

export default App;
