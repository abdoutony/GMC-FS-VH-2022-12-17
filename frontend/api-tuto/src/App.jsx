import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import "./App.css";
import DetailsPage from "./pages/details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/productlist/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
