import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormExample from "./pages/AddVenu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/FormExample" element = {<FormExample/>} />
      </Routes>
    </BrowserRouter>
  );
}

