import React, { useContext } from 'react'
import { TabsContext } from './TabContext';

export default function Tabs() {
    const tabContext = useContext(TabsContext);
    console.log(tabContext.defaultValue);
  return (
    <>
      
    </>
  )
}
