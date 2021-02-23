import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { GlobalStyle } from "./styles/globalstyle";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import 'react-alice-carousel/lib/alice-carousel.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route path="/:type/:id">
            <Movie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
