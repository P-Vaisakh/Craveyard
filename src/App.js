import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="view/:id" element={<View></View>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
