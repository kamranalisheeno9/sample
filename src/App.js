import logo from './logo.svg';
import './App.css';
import Success from "./screens/success"
import Login from "./screens/login"
import Track from "./screens/track"
import Started from "./screens/started"
import Summary from "./screens/summary"
import SenderInfo from "./screens/senderInfo"
import CardInfo from "./screens/cardInfo"
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    
    <div className="App">
 <BrowserRouter>
      <Routes>
      <Route path="/getstarted" element={<Started />} />
      <Route path="/Summary" element={<Summary />} />
      <Route path="/card-information" element={<CardInfo />} />
      <Route path="/sender-information" element={<SenderInfo />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Track />} />
     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
