import { useContext } from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./ModalsContext";

const Modals = () => {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { component, props, isOpen } = modal;
    if (!props) return null;

    const { onSubmit, ...rest } = props;

    const onClose = () => {
      close(component);
    };

    const handleSubmit = async () => {
      if (typeof onSubmit === "function") {
        await onSubmit();
      }
      onClose();
    };

    return <component key={index} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} {...rest} />;
  });
};

export default Modals;
