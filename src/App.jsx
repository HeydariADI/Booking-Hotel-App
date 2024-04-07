
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Component/Header";
import LocationList from "./Component/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./Component/AppLayout";
import Hotels from "./Component/Hotels";
import HotelsProvider from "./Component/Context/HotelsProvider";
function App() {
  return (
    <HotelsProvider>
           <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element = {<LocationList/>}/>
        <Route path="/hotels" element = {<AppLayout/>}>
          <Route index element = {<Hotels/>}/>
          <Route path=":id" element = {<div>single hotel</div>}/>

        </Route>
      </Routes>
    </HotelsProvider>
  )

}

export default App;

