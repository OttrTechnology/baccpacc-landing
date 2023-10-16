import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./routes/home/home";
import MobileApp from "./routes/app/app";
import PrivacyPolicy from "./routes/privacy-policy";
import TermsAndConditions from "./routes/terms-and-conditions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<MobileApp />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
}

export default App;
