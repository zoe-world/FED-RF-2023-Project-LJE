import { useContext } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";
import MyModal from "./MyModal";

export const modals = {
  myModal:MyModal,
}

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props, isOpen } = modal;
    if (!props) return null;

    const { onSubmit, ...rest } = props;

    const onClose = () => {
      close(Component);
    };

    return (
      <Component
        key={index}
        isOpen={isOpen}
        onClose={onClose}
        {...rest}
      />
    );
  });
};

export default Modals;
