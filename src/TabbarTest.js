import {Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'

const TabbarTest = () => {
    const [value,setValue] = useState("")
  return (
    <div>
        <Tabs 
        indicatorColor="secondary" 
        textColor="secondary"
        value={value} 
        onClick={(e,val)=>setValue(val)}>
            <Tab label="FIRST"/>
            <Tab label="SECOND"/>
            <Tab label="THIRD"/>
        </Tabs>
    </div>
  )
}

export default TabbarTest