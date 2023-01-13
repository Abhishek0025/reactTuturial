import Todo from "./components/Todo";
// import Modal from "./components/Modal"
// import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn react'/>
      <Todo text='Master react'/>
      <Todo text='Explore the react course'/>
      {/* <Modal />
      <Backdrop /> */}
    </div>
  );
}

export default App;
