
export { InlineModal };

const InlineModal = (function(){


    let proto = {
        show: function(x,y){

            if(x && y){
                x = x +'px';
                y= y +'px';
                $('.absolute').css('top', y);
                $('.absolute').css('left', x);
            }

            $('.absolute').css("display","block");
        },

        hide: function(){
            $('.absolute').css("display", "none");
            //setTimeout(() => $('body').removeClass('has-modal-jr', 100));
        },

        render: function(vNode){
            document.getElementById('absolute').innerHtml = "";
            document.getElementById('absolute').appendChild(createElement(vNode));
        },

        renderHtml: function(html){
            document.getElementById('absolute').innerHTML = html;
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
        this.root.setAttribute("class","modal");
        document.querySelector("body").appendChild(this.root);
    }

    inlineModal.prototype = proto;

    return inlineModal;
})();

