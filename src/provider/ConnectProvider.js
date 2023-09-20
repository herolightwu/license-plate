import React, { createContext } from 'react';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const ConnectContext = createContext({
  errorAlert: () => {},
  successAlert: () => {}
})

const ConnectProvider = ({ children }) => {
  const errorAlert = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const successAlert = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <ConnectContext.Provider value={{
      errorAlert,
      successAlert,
    }}>
      {children}
    </ConnectContext.Provider>
  )
}

export default ConnectProvider;