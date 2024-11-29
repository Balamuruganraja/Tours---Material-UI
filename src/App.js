import "./App.css";
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import NavBar from "./components/navBar";
import MenuBar from "./components/menuBar";
import MainContent from "./components/mainContent";
import RightBar from "./components/rightBar";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function App() {

  const [theme,setTheme] = useState('dark');

  const darkTheme = createTheme({
    palette:{
      mode:theme
    },
    typography:{
      fontFamily:"poppins",
      fontWeightLight:300,
      fontWeightMedium:500,
      fontWeightRegular:400,
      fontWeightBold:600
    }
  })


  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Container maxWidth="xl">
        <Stack direction={{md:"column", lg:"row"}} spacing={2} justifyContent={"space-between"} alignItems={{sm:"center", lg:"normal"}}>
          <MenuBar />
          <MainContent />
          <RightBar />
        </Stack>
      </Container>
    </Box>
    
    </ThemeProvider>
  );
}

export default App;
