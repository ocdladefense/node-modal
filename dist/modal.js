/** @jsx vNode */
/*

modal.renderHtml("<h1>Hello World!</h1>");
modal.show();

*/
import { vNode, View } from "../../../node_modules/@ocdladefense/view/view.js";
export { Modal, ModalComponent };
var Modal = function () {
  var proto = {
    show: function show() {
      document.body.addClass("has-modal");
      document.body.addClass("loading");
      setTimeout(function () {
        return document.getElementById("modal").addClass("fullscreen");
      }, 100);
    },
    hide: function hide() {
      document.getElementById("modal").removeClass("fullscreen");
      setTimeout(function () {
        return document.body.removeClass('has-modal');
      }, 100);
    },
    render: function render(html) {
      var vnode = vNode(ModalComponent, {
        content: html
      });
      var node = View.createElement(vnode);
    },
    renderHtml: function renderHtml(html, targetId) {
      document.body.removeClass("loading");
      document.getElementById(targetId || "modal-content").innerHTML = html;
    },
    titleBar: function titleBar(html) {
      document.getElementById("modal-title-bar-content").innerHTML = html;
      var selector = document.getElementById("dropdown");
      selector.addEventListener("change", function () {
        console.log("Dropdown Selected");
      });
      var closeBtn = document.getElementById("close-modal");
      closeBtn.addEventListener("click", function () {
        modal.hide();
      });
    },
    title: function title(text) {
      document.getElementById("modal-title-bar-title").innerHTML = text;
    },
    leftNav: function leftNav(html) {
      document.getElementById("modal-left-nav").innerHTML = html;
    },
    html: function html(_html) {
      this.renderHtml(_html);
    }
  };
  function Modal() {
    this.body = document.body;
    this.modal = document.getElementById("modal");
  }
  Modal.prototype = proto;
  return Modal;
}();
var ModalComponent = function ModalComponent(props) {
  var content = props.content;
  return vNode("div", {
    id: "modal-backdrop"
  }, vNode("div", {
    id: "modal"
  }, vNode("div", {
    id: "modal-container",
    style: "overflow-y:visible;"
  }, vNode("div", {
    id: "modal-body",
    style: "vertical-align:top;"
  }, vNode("div", {
    id: "modal-title-bar"
  }, vNode("button", {
    style: "float:right;",
    id: "close-modal",
    type: "button"
  }, "X"), vNode("div", {
    id: "modal-title-bar-title"
  })), vNode("div", {
    id: "modal-left-nav",
    "class": "modal-toc",
    style: "display:inline-block;width:25%; vertical-align:top;overflow-y:auto;overflow-y: auto;position: sticky;max-height: 600px;padding-right:25px;"
  }), vNode("div", {
    id: "modal-content",
    style: "display:inline-block; width:74%; vertical-align:top; overflow-y: auto; overflow-y: auto; max-height: 600px; padding: 35px;"
  }, content))), vNode("div", {
    id: "loading"
  }, vNode("div", {
    id: "loading-wheel"
  }))));
};