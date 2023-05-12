/*

modal.renderHtml("<h1>Hello World!</h1>");
modal.show();

*/
export { Modal };

const Modal = (function() {
    let proto = {

        show: function(){
            $('body').addClass("has-modal");
            $("body").addClass("loading");
            setTimeout(() => $("#modal").addClass("fullscreen"), 100);
        },
        
        
        hide: function() {
            $("#modal").removeClass("fullscreen")
            setTimeout(() => $('body').removeClass('has-modal'), 100);
        },
        
        
        render: function(vNode){
            document.getElementById('modal-content').innerHTML = "";
            document.getElementById('modal-content').appendChild(createElement(vNode));
        },

        
        renderHtml: function(html, targetId) {
            $("body").removeClass("loading");
            document.getElementById(targetId || "modal-content").innerHTML = html;
        },

        titleBar: function(html) {
            document.getElementById("modal-title-bar-content").innerHTML = html;
            var selector = document.getElementById("dropdown");
            selector.addEventListener("change", ()=> {console.log("Dropdown Selected")});

            var closeBtn = document.getElementById("close-modal");
            closeBtn.addEventListener("click", ()=>{modal.hide()});
        },

        toc: function(html) {
            document.getElementById("ors-toc").innerHTML = html;
        },
        
        
        html: function(html) {
            this.renderHtml(html);
        },

       
        
    };


    function Modal() {
    
    }

    Modal.prototype = proto;

    return Modal;

})();