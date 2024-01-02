import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import Routes from "./routes/Routes";

function App() {
  axios.defaults.baseURL = "https://swift-talk-backend.onrender.com";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
