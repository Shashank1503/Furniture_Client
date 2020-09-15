    // --------------------------------
    //  This will show Error 404 message if the route path is different from what is initialized in the app.js
    // --------------------------------

let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error </h1>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;