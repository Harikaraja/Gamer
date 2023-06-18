import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verify from './pages/Verify';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/verify' element={<Verify />}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
