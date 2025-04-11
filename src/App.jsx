import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
