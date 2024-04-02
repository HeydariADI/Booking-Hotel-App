
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Component/Header";
import LocationList from "./Component/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Component/AppLayout";
function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element = {<LocationList/>}/>
        <Route path="/hotels" element = {<AppLayout/>}>
          <Route index element = {<div>hotels</div>}/>
          <Route path=":id" element = {<div>single hotel</div>}/>

        </Route>
      </Routes>

    </div>
  )

}

export default App;

