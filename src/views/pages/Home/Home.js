    // --------------------------------
    //  A simple Home or '/'landing page for you.
    // --------------------------------

import homeBanner from "../../../../asset/Home-banner.png";
import "./Home.scss";

let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="section min-height">
                <img src="${homeBanner}" style= "width:100%"/>
                <div class="home-desc">
                <h1 style="color:darkslategrey">Welcome To The Cosy Cushion</h1>
                <h3 style="color:darkslategrey">Start your home Interior Decoration from here</h3>
                <div class="button-div">
                    <a href="#/shop">
                        <div class="btn-shadow btn-video">Go To Shop</div>
                    </a>
                </div>
                </div>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Home;