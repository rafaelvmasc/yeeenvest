import Home from "./pages/Home";
import { CoinContextProvider } from "./context/CoinContext";
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
      <CoinContextProvider>
        <Route path="/dashboard" component={Dashboard}></Route>
      </CoinContextProvider>
    </BrowserRouter>
  );
}

export default App;
