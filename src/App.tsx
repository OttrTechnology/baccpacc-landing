import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import './App.scss';
import MobileApp from "./routes/app/app";



function App() {

  return (
    <Routes>
      <Route path='/' element = {<Home />}></Route>
      <Route path="/app" element= {<MobileApp />}/>
    </Routes>
    
  )
}

export default App
