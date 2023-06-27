import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Classes from "./Components/Class/Classes";
import ClassPage from "./Components/Class/ClassPage";
import Footer from "./Components/Footer";
import Pricing from "./Components/Payment/Pricing";
import AboutUs from "./Components/AboutUS/AboutUs";



function App() {
  return (
    <div className="App">
     <>
     <Header></Header>
     <Routes>
      <Route path={"/"} element={<Home></Home>}/>
      <Route path={"/classes"} element={<Classes></Classes>}/>
      <Route path={"/classes/:id"} element={<ClassPage></ClassPage>}/>
      <Route path={"/pricing"} element={<Pricing></Pricing>}/>
      <Route path={"/about"} element={<AboutUs></AboutUs>}/>
     </Routes>
     <Footer></Footer>
     </>
    </div>
  );
}

export default App;
