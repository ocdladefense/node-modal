/** @jsx vNode */

/**
 * This is our list of components to be used in the app.
*/


export { ModalComponent };
import { vNode } from '~/view/view.js';



const ModalComponent = function(props) {


  return (
    <div class="modal container arrow" id={props.id}>
      <div class="modal inline-modal " >
        <div class="modal-content">
          Some modal content.
        </div>
      </div>
    </div>
  )
};