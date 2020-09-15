"use strict";

import Home         from './views/pages/Home/Home.js'
import Error404     from './views/pages/Error404.js'
import DetailShow     from './views/pages/Details/Detail.js'
import Shop         from './views/pages/Shop/Shop.js'

import Navbar       from './views/components/NavbarComponent/Navbar.js'
import Footer    from './views/components/FooterComponent/Footer.js' 

import Utils        from './services/Utils.js'
import '@babel/polyfill';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : Home
    , '/shop'       : Shop
    , '/shop/:id'   : DetailShow
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    header.innerHTML = await Navbar.render();
    await Navbar.after_render();
    footer.innerHTML = await Footer.render();
    await Footer.after_render();


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
