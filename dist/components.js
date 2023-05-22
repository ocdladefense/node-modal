/** @jsx vNode */

/**
 * This is our list of components to be used in the app.
*/

export { InlineModalComponent };
import { vNode } from '../../view/view.js';
var InlineModalComponent = function InlineModalComponent(props) {
  return vNode("div", {
    "class": "modal inline-modal",
    id: props.id
  }, vNode("div", {
    "class": "modal-container"
  }, vNode("div", {
    "class": "modal-content"
  }, "Loading...")));
};