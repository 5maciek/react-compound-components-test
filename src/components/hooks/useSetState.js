import { useState } from "react";

const useSetState = initialState => {
  const [state, changeState] = useState(initialState);

  const setState = (newState) => {
    changeState({ ...state, ...newState });  
  };

  return [state, setState];
};

export default useSetState;