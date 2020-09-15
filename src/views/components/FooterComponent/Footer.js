    // --------------------------------
    //  This Component is used to show the footer in the application in all pages.
    // --------------------------------

let Footer = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="container-fluid">
                <div class="">
                    <span>Created By Shashank Gupta</span>
                </div>     
                <div class="">
                    <span>Copyright © 2020</span>
                </div>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Footer;