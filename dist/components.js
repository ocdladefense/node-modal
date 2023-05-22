/** @jsx vNode */

/**
 * This is our list of components to be used in the app.
*/

export { InlineModalComponent };
import { vNode } from '../../view/view.js';
var InlineModalComponent = function InlineModalComponent(props) {
  return vNode("div", {
    "class": "modal container arrow-top",
    id: props.id
  }, vNode("div", {
    "class": "modal inline-modal"
  }, vNode("div", {
    "class": "modal-content"
  }, "Loading...")));
};