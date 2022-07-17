/** @jsx vNode */

/**
 * This is our list of components to be used in the app.
*/


export { ModalComponent };
import { vNode } from '~/view/view.js';



const ModalComponent = function(props) {


  return (
    <div class="modal inline-modal" id={props.id}>
      <div class="modal-content">
        Some modal content.
      </div>
    </div>
  )
};