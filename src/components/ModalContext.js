import React from "react";
export const modalContext = React.createContext({
  isOpen: false,
  handleToggle: () => {}
});
