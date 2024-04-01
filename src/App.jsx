
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Component/Header";
import LocationList from "./Component/LocationList";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element = {<LocationList/>}/>
      </Routes>

    </div>
  )

}

export default App;

