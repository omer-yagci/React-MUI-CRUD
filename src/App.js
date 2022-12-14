import "./App.css";
import SideMenu from "./components/SideMenu";
import { makeStyles, CssBaseline, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";

import { createMuiTheme } from "@material-ui/core/styles";
import Employees from "./pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});
const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const clases = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={clases.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
