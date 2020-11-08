import { useEffect } from "react";
import Search from "./pages/Search";
// import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

function App() {

  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
<Router>
    <div>
      <Switch>
        <Route exact path="/search" component={Search} />
        {/* <Route exact path="/saved" component={Saved} /> */}
        <Route exact path="/" component={Search} />
        </Switch>
    </div>
</Router>
  );
}

export default App;