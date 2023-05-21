/** @jsx vNode */

/**
 * This is our list of components to be used in the app.
*/


export { InlineModalComponent };
import { vNode } from '../../view/view.js';



const InlineModalComponent = function(props) {


  return (
    <div class="modal container arrow-top" id={props.id}>
      <div class="modal inline-modal">
        <div class="modal-content">
          Loading...
        </div>
      </div>
    </div>
  )
};