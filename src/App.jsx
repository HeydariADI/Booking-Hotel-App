
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Component/Header";
import LocationList from "./Component/LocationList";
function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <LocationList/>
    </div>
  )

}

export default App;

