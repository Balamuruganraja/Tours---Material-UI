import React from 'react'
import Box from '@mui/material/Box'
import { List } from '@mui/material'
import {AirplanemodeActive, Accessibility, Explore, Info, ListOutlined, LocalActivity, Place } from '@mui/icons-material';
import ItemMenu from './ItemMenu';

export default function MenuBar() {
  return (
    <Box flex={1} mt={2} sx={{display:{lg:"block", xs:"none", }}}>
    <Box position={"fixed"}>
       <List>
        <ItemMenu text={"Plan your Trip"} Icon={ <AirplanemodeActive />} />
        <ItemMenu text={"Things to do"} Icon={ <ListOutlined />} />
        <ItemMenu text={"Explore"} Icon={ <Explore />} />
        <ItemMenu text={"Facts"} Icon={ <Accessibility />} />
        <ItemMenu text={"Places"} Icon={ <Place />} />
        <ItemMenu text={"tickets"} Icon={ <LocalActivity />} />
        <ItemMenu text={"help"} Icon={ <Info />} />
      </List>
    </Box>
    </Box>
  )
}
