import React, { Component } from "react";
import { TabsContext } from "./TabContext";

const TabProvider = ({ defaultValue ,children }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultValue);
  const providerValue = {selectedIndex, setSelectedIndex}

  return (
    <TabsContext.Provider value={providerValue}>
      {children}
    </TabsContext.Provider>
  );
};

export default TabProvider;
