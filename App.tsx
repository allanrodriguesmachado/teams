import Loading from "@components/Loading";
import Groups from "@screens/Groups";
import NewGroup from "@screens/NewGroup";
import theme from "@theme/index";
import {StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {/* <Groups /> */}
        <NewGroup />
    </ThemeProvider>
  )
}