import React from 'react';
//import './App.css';
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
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
