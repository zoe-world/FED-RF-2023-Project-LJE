import { useContext, useState } from "react";
import { ModalsDispatchContext, ModalsStateContext, TabStateContext } from "./ModalsContext";
import MyModal from "./MyModal";

export const modals = {
  myModal: MyModal,
};

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props, isOpen } = modal;
    if (!props) return null;

    const { onReset, ...restProps } = props;

    const onClose = () => {
      close(Component);
    };

    return (
      <Component
        {...restProps}
        key={index}
        isOpen={isOpen}
        onClose={onClose}
        index={index}
      />
    );
  });
};

export default Modals;
