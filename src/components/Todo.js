// Holds another component. Component in react is just a function'
// Name of the function should be capital character.' and values are 
// All the attributes for the element in App.js are available as (key, value) pairs in props object. For ex, attribute name is "text" and attribute value is "Learn react"
import { useState } from "react"; 

import Modal from "./Modal";
import Backdrop from "./Backdrop";

//  Props: important for building re-usable components
// States: for changing what we see on screen dynamically, i.e for adding, removing elements, here it si showing and hiding overlay.
function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false); // Calls state that react is aware of. This is react hook and those react hooks can only be called in react component functions. useState returns an array with two elements. We can either store these using a constant or use array destructuring. "setModalIsOpen" is a function that allows to change the value i.e you always assign the second function to update or change the value.

    function deleteHandler() {
        // console.log("Clicked!");
        // console.log(props.text);
        setModalIsOpen(true); //To change the modalIsOpen state from false to true
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }

    //In line 30, <Backdrop onCancel={closeModalHandler}, we use prop to pass function as a value
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>Delete</button>
      </div> 
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      { modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
  );
}

export default Todo; // to make sure this function available outside this file and to use in other files.
