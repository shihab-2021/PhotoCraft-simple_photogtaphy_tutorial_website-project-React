import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Services from './Services/Services';
import About from './About/About';
import Footer from './Footer/Footer'
import Tutorial from './Tutorial/Tutorial';
import  NotFound  from './NotFound/NotFound';
import Next from './Next/Next';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/tutorial">
            <Tutorial></Tutorial>
          </Route>
          <Route path="/next">
            <Next></Next>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
