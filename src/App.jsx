import { ThemeProvider } from "@mui/material";
import AppRouters from "./routes/AppRouters";
import customTheme from "./theme/customTheme";
// import { ScrollSmoother } from "gsap-trial/all";
// import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
import { useRef } from "react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const smoother = ScrollSmoother.create({
  //     content: containerRef.current,
  //     smooth: 3,
  //     normalizeScroll: true,
  //     ignoreMobileResize: true,
  //     effects: true,
  //   });

  //   smoother.effects("img", { speed: "auto" });

  //   // Cleanup when unmounting the component
  // }, []);
  return (
    <div className="App ">
      <ThemeProvider theme={customTheme}>
        <AppRouters />
      </ThemeProvider>
    </div>
  );
}

export default App;
