import { dark } from "@mui/material/styles/createPalette.js";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components"

import Menu from "./components/menu.jsx"
import Navbar from "./components/navbar.jsx";
import { darkTheme, lightTheme } from "./utils/Theme.js";

const Container = styled.div`

  display:flex;

`

const Main = styled.div`

  flex:7;
  background-color: ${({theme})=>theme.bg};

`

const Wrapper = styled.div`

`

function App() {

  const [darkMode,setDarkMode] = useState(false)

  return (

    console.log(darkTheme),

    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>
        <Navbar />
        <Wrapper>
          <h1>test</h1>
          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>
          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>


          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

          <h1>test</h1>

        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>

  );
}

export default App;
