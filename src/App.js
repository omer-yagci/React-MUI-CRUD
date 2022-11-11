import "./App.css";
import SideMenu from "./components/SideMenu";
import { makeStyles, CssBaseline } from "@material-ui/core";
import Header from "./components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const clases = useStyles();
  return (
    <>
      <SideMenu />
      <div className={clases.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
