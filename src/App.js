import React from 'react';
import useSetState from './components/hooks/useSetState'
import Modal from './components/Modal'

function App() {
  const initialState = {
    counter: 0,
    text: ""
  }
  let [state, setState] = useSetState(initialState);

  const handleClick = () => {
    setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  const handleChange = (event) => {
    setState({ text: event.target.value });
  }

  return (
    <div className="App">
      <p>Counter value: {state.counter}</p>
      <input type="text" name="name" onChange={handleChange}/>
      <button onClick={handleClick}>Add 1 to counter</button>
      <Modal>
        <Modal.Header title={'tytuł'} />
        <Modal.Content>
          <h1>to powinno tak działać</h1>
        </Modal.Content>
        <Modal.Footer callToActionLabel={'Udało się'} />
      </Modal>
    </div>
  );
}

export default App;
