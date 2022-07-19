/** @jsx vNode */
export { InlineModal };
import { ModalComponent } from "./components.js";
import { vNode, View } from "../../view/view.js";

var InlineModal = function () {
  var proto = {
    show: function show(x, y) {
      if (x && y) {
        x = x + 'px';
        y = y + 'px';
        $('#' + this.id).css('top', y);
        $('#' + this.id).css('left', x);
      }

      $('#' + this.id).css("display", "block");
    },
    hide: function hide() {
      $('#' + this.id).css("display", "none"); //setTimeout(() => $('body').removeClass('has-modal-jr', 100));
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
    this.root = View.createElement(vNode(ModalComponent, {
      id: selector
    }));
    this.id = selector;
    document.querySelector("body").appendChild(this.root);
  }

  InlineModal.prototype = proto;
  return InlineModal;
}();