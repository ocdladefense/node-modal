
export { InlineModal };

const InlineModal = (function(){


    let proto = {
        show: function(x,y){

            if(x && y){
                x = x +'px';
                y= y +'px';
                $('#modal.inline').css('top', y);
                $('#modal.inline').css('left', x);
            }

            $('#modal.inline').css("display","block");
        },

        hide: function(){
            $('#modal.inline').css("display", "none");
            //setTimeout(() => $('body').removeClass('has-modal-jr', 100));
        },

        render: function(vNode){
            document.getElementById('modal').innerHtml = "";
            document.getElementById('modal').appendChild(createElement(vNode));
        },

        renderHtml: function(html){
            document.getElementById('modal').innerHTML = html;
        },

        html: function(html){
            this.renderHtml(html);
        },

        getRoot: function() {
            return this.root;
        }
    }; 


    function inlineModal(selector) {

        this.root = document.createElement("div");
        this.root.setAttribute("id",selector);
        this.root.setAttribute("class","modal inline");
        document.querySelector("body").appendChild(this.root);
    }

    inlineModal.prototype = proto;

    return inlineModal;
})();

