    // --------------------------------
    //  This is the details page of the Furniture which you clicked from the shop page.
    // --------------------------------

import Utils        from '../../../services/Utils.js';
import "./Detail.scss";
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faCartPlus);
dom.watch();

let getDeatils = async (id) => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:5000/furnitures/` + id, options)
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let DetailShow = {

    render : async () => {
        let request = Utils.parseRequestURL()
        let cardDetail = await getDeatils(request.id)
        return /*html*/`
            <section class="section" style="min-height: 480px;">
                <div class="row">
                    <div class="col-6">
                        <div id="carouselExampleIndicators" class="carousel slide mt-4" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <img class="img-bot" src="${cardDetail.src[0]}" alt="" data-target="#carouselExampleIndicators" data-slide-to="0" class="active">

                                <img class="img-bot left-5" src="${cardDetail.src[1]}" alt="" data-target="#carouselExampleIndicators" data-slide-to="1">
                                    
                                <img class="img-bot left-10" src="${cardDetail.src[2]}" alt="" data-target="#carouselExampleIndicators" data-slide-to="2">
                                    
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="${cardDetail.src[0]}" class="d-block w-100 fix-height" alt="...">
                                </div>
                                <div class="carousel-item">
                                    <img src="${cardDetail.src[1]}" class="d-block w-100 fix-height" alt="...">
                                    </div>
                                <div class="carousel-item">
                                    <img src="${cardDetail.src[2]}" class="d-block w-100 fix-height" alt="...">
                                </div>
                            </div>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    <div class="col-6 desc">
                        <div class="desc-title"><span>${cardDetail.name}</span></div>
                        <div class="desc-collection"><span>${cardDetail.collection}</span></div>
                        <div class="desc-description"><span>${cardDetail.description}</span></div>
                        <div class="desc-color"><span>Color</span></div>
                        <div class="desc-color-dot">
                        ${cardDetail.color.map((item, i) => `
                        <span class="dot-${item}"></span>
                        `).join('')}
                        </div>
                        <div class="desc-price-desc"><span>Price per unit</span></div>
                        <div style="margin-top: 10px;">
                        <span class="desc-price">$${cardDetail.price}</span>
                        <div class="button-div-detail">
                            <a href="#/checkout">
                            <div class="btn-shadow-detail">Buy Now</div>
                            </a>
                        </div>
                        <span><i class="fas fa-cart-plus fa-lg"></i></span>
                        </div>
                    </div>    
                </div>        
            </section>
        `
    }
    , after_render: async () => {
    }
}

export default DetailShow;