import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loading from "./components/Loading";

// import Home from "./pages/Home";
// import Portfolio from "./pages/Portfolio";

const Home = React.lazy(() => import("./pages/Home"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));

function App() {
  // const [initial, setInitial] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setInitial(true);
  //   }, 2000);
  // });

  // if (initial === false) {
  //   return <Loading />;
  // }

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="nav">
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <div className="nav-load"></div>
            </li>
            <li>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
