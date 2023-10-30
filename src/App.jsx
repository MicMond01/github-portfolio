import { ThemeProvider } from "@mui/material";
import AppRouters from "./routes/AppRouters";
import customTheme from "./theme/customTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <AppRouters />
      </ThemeProvider>
    </div>
  );
}

export default App;
