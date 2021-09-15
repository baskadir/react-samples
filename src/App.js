import Content from "./components/Content";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WebUser from "./components/propsSample/WebUser";
import Percent from "./components/stateSample/Percent";

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Product from "./components/fetchSample/Product";
import Customer from "./components/fetchSample/Customer";

function App() {
  return (
    <>
      {/* <Navbar></Navbar>
      <Header></Header>
      <Content></Content> */}
      {/* <WebUser></WebUser> */}
      {/* <Percent></Percent> */}

      <BrowserRouter>
        <ul>
          <li>
            <Link to='/customer'>Customers</Link>
          </li>
          <li>
            <Link to='/product'>Products</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/product'>
            <Product></Product>
          </Route>
          <Route path='/customer'>
            <Customer></Customer>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
