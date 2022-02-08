import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Calculator from "./pages/Calculator";
import Simulator from "./pages/Simulator";
import UserChoices from "./pages/UserChoices";
import UserChoicesBox from "./pages/UserChoicesBox";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <HashRouter>
      <header>
        <Switch>
          <Route path="/items_choice" exact component={Navigation}/>
          <Route path="/items_choice_box" exact component={Navigation}/>
          <Route path="/calculator" exact component={Navigation}/>
          <Route path="/simulator" exact component={Navigation}/>
        </Switch>
      </header>

      <main>
      <span className='background'></span>   
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/items_choice" exact component={UserChoices}/>
          <Route path="/items_choice_box" exact component={UserChoicesBox}/>
          <Route path="/calculator" exact component={Calculator}/>
          <Route path="/simulator" exact component={Simulator}/>
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
