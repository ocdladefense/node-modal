/** @jsx vNode */
/*

modal.renderHtml("<h1>Hello World!</h1>");
modal.show();

*/
import {vNode,View} from "../../../node_modules/@ocdladefense/view/view.js";
export { Modal, ModalComponent };


const Modal = (function() {
    let proto = {

        show: function(){
            document.body.classList.add("has-modal");
            document.body.classList.add("loading");
            setTimeout(() => document.getElementById("modal").classList.add("fullscreen"), 100);
        },
        
        
        hide: function() {
            //document.getElementById("modal").classList.remove("fullscreen")
            setTimeout(() => document.body.classList.remove('has-modal'), 100);
        },
        
        
        render: function(html){
            //if modal exists
            let modalElement = document.getElementById("modal");
            if(modalElement != null){
                modalElement.remove();
            }
            let vnode =  <ModalComponent content={html} />;
            let node = View.createElement(vnode);
            document.body.appendChild(node);
        },

        
        renderHtml: function(html, targetId) {
            document.body.classList.remove("loading");
            document.getElementById(targetId || "modal-content").innerHTML = html;
        },

        titleBar: function(html) {
            document.getElementById("modal-title-bar-content").innerHTML = html;
            var selector = document.getElementById("dropdown");
            selector.addEventListener("change", ()=> {console.log("Dropdown Selected")});
        },

        title: function(text) {
            document.getElementById("modal-title-bar-title").innerHTML = text;
        },

        leftNav: function(html) {
            document.getElementById("modal-left-nav").innerHTML = html;
        },
        
        
        html: function(html) {
            this.renderHtml(html);
        },

        handleEvent: function(e){
            console.log(e.type);
            let target = e.target;
            if(!["close-modal", "modal-backdrop"].includes(target.id)){
                return false;
            }

            e.preventDefault();
            this.hide();
            
        }
    };


    function Modal() {
        this.body = document.body;
        //this.modal = document.getElementById("modal");
        
        document.addEventListener("click", this);
    }

    Modal.prototype = proto;

    return Modal;
})();

const ModalComponent = function(props){
    let content = props.content;
    return (
    <div id="modal-backdrop">
            <div id="modal">
                <div id="modal-container" style="overflow-y:visible;"> 
                    <div id="modal-body" style="vertical-align:top;">
                        <div id="modal-title-bar">
                            <button style="float:right;" id="close-modal" type="button">X</button>
                            <div id="modal-title-bar-title"></div>
                        </div>
                        <div id="modal-left-nav" class="modal-toc" style="display:inline-block;width:25%; vertical-align:top;overflow-y:auto;overflow-y: auto;position: sticky;max-height: 600px;padding-right:25px;">

                        </div>
                        <div id="modal-content" style="display:inline-block; width:74%; vertical-align:top; overflow-y: auto; overflow-y: auto; max-height: 600px; padding: 35px;">
                        {content}
                        </div>
                    </div>
                </div>
                <div id="loading">
                    <div id="loading-wheel"></div>
                </div>
            </div>  
        </div>
    )
};
