import React from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";
import { useState } from "react";
import { useMemo } from "react";

const ModalsProvider = ({children}) => {

    const [openedModals, setOpenedModals] = useState([]);
    const open = (component, props) => {    
        setOpenedModals((modals)=>{
            return [...modals, {component, props}];
        })
    };
    const close = (component) => {
        setOpenedModals((modals)=>{
            return modals.filter((modal)=>{
                return modal.component !== component;
            })
        })
    };
    const dispatch = useMemo(()=> ({open,close}), []) ;
  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export default ModalsProvider;
