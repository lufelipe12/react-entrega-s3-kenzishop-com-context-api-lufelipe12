import "./App.css";
import Routes from "./Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer />
        <Routes />
      </header>
    </div>
  );
}

export default App;
