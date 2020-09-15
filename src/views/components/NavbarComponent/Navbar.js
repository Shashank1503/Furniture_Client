    // --------------------------------
    //  This Component is the Top Navigation which is used for navigation to different pages.
    // --------------------------------

import logo from '../../../../asset/logo.png';
import './Navbar.scss';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

// Adding the Fontawesome icons in this javascript file.
library.add(faSearch, faShoppingCart);
dom.watch();

let Navbar = {
    render: async () => {
        let view =  /*html*/`
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container wrapper">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img src="${logo}" width="60" height="40">
                        </a>
                    </div>

                    <div class="navbar-menu" aria-expanded="false">
                        <div class="navbar-start">
                            <a class="navbar-item nav-a" href="/#/">
                                HOME
                            </a>
                            <a class="navbar-item nav-a" href="/#/shop">
                                SHOP
                            </a>
                            <a class="navbar-item nav-a" href="/#/magazine">
                                MAGAZINE
                            </a>
                        </div>
                        <div class="navbar-end">
                            <div class="navbar-item nav-flex">
                                <div class="search pad-10"> 
                                    <form action="#"> 
                                        <button class="search-icon"> 
                                            <i class="fas fa-search"
                                            style="font-size: 18px;"> 
                                            </i> 
                                        </button>
                                        <input type="text" class="input-outline"
                                        name="search">  
                                    </form> 
                                </div>
                                <div class="buttons pad-10">
                                    <button class="checkout-icon"> 
                                        <i class="fas fa-shopping-cart"></i> 
                                    </button>
                                    <a class="navbar-item nav-a" href="/#/login">
                                        LOGIN
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;