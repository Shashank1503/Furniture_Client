    // --------------------------------
    //  The Shop page where different Cards are dynamically created by using the api data.
    // --------------------------------

import "./Shop.scss"
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons"



library.add(faStar,faStarReg,faCartPlus);
dom.watch();
// --------------------------------
//  Define Data Sources
// --------------------------------

let getCardsList = async () => {
    const options = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json'
       }
   };
   try {
       const response = await fetch(`http://localhost:5000/furnitures`, options)
       const json = await response.json();
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let getCard = async () => {
    let res = await getCardsList()
    let Cards = [];
    for(let i in res) {
        Cards.push(res[i]); 
     }
     const card = document.createElement('div');
     Cards.forEach((result, idx) => {
        const startNumber = result.rating;
        const blankStarNumber = (5 - startNumber);
        let CardView = /*html*/`
                            <div class="card card-bor" style="width: 17rem;" id="${idx}">
                                <a href="#/shop/${result.id}"><img class="card-img-top fixed-height" src="${result.src[0]}" alt="Card image cap"></a>
                                <div class="card-body">
                                    <div class="blankdiv"></div>
                                    <div class= "row pos-above">
                                    <div class= "col-12">
                                    <div class="row">
                                        <span class="card-title-new">${result.name}</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 no-pad">    
                                        <span class="card-text cat-font">${result.category.toUpperCase()}</span></div>
                                        <div class="col-6 no-pad price">
                                        <span class="card-text">$${result.price}</span></div>
                                    </div>
                                    <div class="row pt-3">
                                    <div class="col-6 no-pad">
                                        ${Array(startNumber).fill().map((item, i) => `
                                        <i class="fas fa-star fa-xs"></i>
                                        `).join('')}
                                        ${Array(blankStarNumber).fill().map((item, i) => `
                                        <i class="far fa-star fa-xs"></i>
                                        `).join('')}
                                        </div>
                                        <div class="col-6 no-pad text-right">    
                                        <i class="fas fa-cart-plus fa-lg"></i></div>
                                    </div>
                                    </div>
                                    </div>    
                                </div>
                            </div>
                        `;
                        card.innerHTML += CardView;
     })

     return card;
}

let Shop = {
   render : async () => {
       
       let Cards = await getCard()
       let view =  /*html*/`
       <section class="section">
            <div class="row">
                <div class="col-3">
                    <div class= "filter">Filter Component</div>
                </div>
                <div class="col-9">
                    <div class="row">
                        ${Cards.innerHTML}
                    </div>    
                </div>            
            </div>
       </section>
       `
       return view
   }
   , after_render: async () => {
   }

}

export default Shop;