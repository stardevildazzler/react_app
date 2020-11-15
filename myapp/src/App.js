import Header from "./component/header";
import "../src/App.css";
import Home from "./component/homepage"
import Footerfile from "./component/footerfile"
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Myprofile from './component/myprofile'
import logo from './Uploadfiles/image/Blue Corporate Photo Simple Modern Resume.jpg'
import Blogpost from './component/blogpost'
import { Container } from "react-bootstrap";
import Adminpanal from './component/ADMIN/admin'
function App() {
  return (
    <>
    <Router>
    <Header/>
    <Switch>
      <Route  path="/myprofile" component={Myprofile}></Route>
      <Route exact path="/" component={Home}></Route>
       <Route  path="/blog" component={Blogpost}></Route>
      <Route path="/admin" component={Adminpanal}></Route>
    </Switch>
    <Footerfile/>
z
   
    </Router>
  
    </>
  );
}

export default App;
