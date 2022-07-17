/** @jsx vNode */

export { InlineModal };
import { ModalComponent } from "./components.js";
import { vNode, View} from "~/view/view.js";


var InlineModal = function () {
  var proto = {
    show: function show(x, y) {
      if (x && y) {
        x = x + 'px';
        y = y + 'px';
        $('#modal.inline-modal').css('top', y);
        $('#modal.inline-modal').css('left', x);
      }

      $('#modal.inline-modal').css("display", "block");
    },
    hide: function hide() {
      $('#modal.inline-modal').css("display", "none"); //setTimeout(() => $('body').removeClass('has-modal-jr', 100));
    },
    render: function render(vNode) {
      document.getElementById('modal').innerHtml = "";
      document.getElementById('modal').appendChild(View.createElement(vNode));
    },
    renderHtml: function renderHtml(html) {
      document.getElementById('modal').innerHTML = html;
    },
    html: function html(_html) {
      this.renderHtml(_html);
    },
    getRoot: function getRoot() {
      return this.root;
    }
  };

  function InlineModal(selector) {
    this.root = View.createElement(<ModalComponent id={selector} />);
    document.querySelector("body").appendChild(this.root);
  }

  InlineModal.prototype = proto;
  return InlineModal;
}();