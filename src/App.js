import Footer from "./component/footer/footer";
import Navbar from "./component/header/navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Pages />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;