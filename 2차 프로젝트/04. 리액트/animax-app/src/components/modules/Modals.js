import { useContext, useState } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";
import MyModal from "./MyModal";

export const modals = {
  myModal:MyModal,
}

const Modals = () => {
  
 const [currentTab, setCurrentTab] = useState(0);
 

  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props, isOpen } = modal;
    if (!props) return null;

    const { onSubmit, ...restProps} = props;

    const onClose = () => {
      close(Component);
      setTimeout(()=>setCurrentTab(0),500);
    };

    const setTab = v => {
      setCurrentTab(v);
    }

    return (
      <Component
        key={index}
        isOpen={isOpen}
        onClose={onClose}
        setTab={setTab}
        currentTab={currentTab}
        {...restProps}
      />
    );
  });
};

export default Modals;
