import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login_form from "./Components/Login_form";
import Main_page from "./Components/Main_page";
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main_page/>} />
          <Route exact path="/login" element={<Login_form/>} />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </div>
     </BrowserRouter>
  );
}

export default App;
