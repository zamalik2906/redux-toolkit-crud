import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Update from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container container-sm">
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/update/:id" element={<Update />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default App;
