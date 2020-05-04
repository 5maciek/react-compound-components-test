import { useState } from "react";

const useSetState = initialState => {
    const [state, changeState] = useState(initialState);

    const setState = (newState, callback = () => { }) => {        
        switch (typeof newState) {
            case "object":
                changeState({ ...state, ...newState });
                break;
            default:
                changeState({ ...state, ...newState(state) });
                break;
        }
    };

    return [state, setState];
};

export default useSetState;