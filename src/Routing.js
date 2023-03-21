import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './components/home/Home';
import Product from './components/Product/Product';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function Routing()
{
return(
 <BrowserRouter>
<Header />
<Route exact path="/" component={Home}></Route>
<Route exact path="/product" component={Product}></Route>
<Route exact path="/about" component={About}></Route>
<Route exact path="/contact" component={Contact}></Route>
<Footer />
</BrowserRouter>
)
}
export default Routing;