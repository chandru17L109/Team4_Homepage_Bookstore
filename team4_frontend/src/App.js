import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Screen/HomePage/home'
import Header from './Components/Screen/Header/MainHeader/header';
import SecondHeader from './Components/Screen/Header/SubHeader/secondheader';
import PopularPage from './Components/Screen/PopularBooksPage/popularpage';
import Footer from './Components/Screen/Footer/footer';
import AllBooksPage from './Components/Screen/MixedCollectionsPage/allbookspage'
import TodayDealsPage from './Components/Screen/TodayDealsPage/todaydealspage'
import ProductDetailspage from './Components/Screen/DescriptionPage/description.js';
import NewRelease from './Components/Screen/NewReleasesPage/newrelease.js';
import Headersearch from './Components/Screen/Header/MainHeader/headersearch.js';
import Login from "./Components/Screen/LoginPage/login";



function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <SecondHeader/> 
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/allbookspage" component={AllBooksPage}></Route>
                <Route path="/todaydealspage" component={TodayDealsPage}></Route>
                <Route path="/popularpage" component={PopularPage}></Route> 
                <Route path="/description" component={ProductDetailspage}></Route>
                <Route path="/newrelease" component={NewRelease}></Route>
                <Route path="/headersearchresults/:searchelement" component={Headersearch}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/description" component={ProductDetailspage}></Route>
                <Route path="/booklist" component={AllBooksPage}></Route> 
              </Switch>        
        <Footer/>
      </Router>
    </div>
   
  );
}

export default App;
