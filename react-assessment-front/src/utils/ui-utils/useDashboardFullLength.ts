import { MutableRefObject, useEffect } from "react";

/**
 * Makes dashboard's height fill the rest of the screen
 */
export default function useDashboardFullLength(
  dashboardRef: MutableRefObject<HTMLElement | undefined>
) {
  useEffect(() => {
    //Breakpoint like media query to set height to 100%
    const breakpiontForFullHeight = 990;

    //Calls setHeight() once, then again when resize happens.
    function setHeight() {
      const skipSetHeight = window.innerWidth < breakpiontForFullHeight;
      if (dashboardRef.current) {
        if (!skipSetHeight) {
          const height =
            window.innerHeight - dashboardRef.current.offsetTop + "px";
          dashboardRef.current.style.height = height;
        } else {
          dashboardRef.current.style.height = "100%";
        }
      }
    }
    setHeight();
    window.addEventListener("resize", setHeight);

    return () => window.removeEventListener("resize", setHeight);
  }, [dashboardRef]);
}
