import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export default function ItemMenu({Icon,text}) {
  return (
      <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {Icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
  )
}
