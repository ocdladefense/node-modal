/** @jsx vNode */

/**
 * This is our list of components to be used in the app.
*/
export { ModalComponent };
import { vNode } from "../../view/view.js";

var ModalComponent = function ModalComponent(props) {
  return vNode("div", {
    "class": "modal inline-modal",
    id: props.id
  }, vNode("div", {
    "class": "modal-content"
  }, "Some modal content."));
};