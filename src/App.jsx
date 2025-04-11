import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <HomePage /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
