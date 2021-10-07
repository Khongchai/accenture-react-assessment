import { MutableRefObject, useEffect } from "react";

/**
 * Makes dashboard's height fill the rest of the screen
 */
export default function useDashboardFullLength(
  dashboardRef: MutableRefObject<HTMLElement | undefined>
) {
  //Calls setHeight() once, then again when resize happens.
  useEffect(() => {
    function setHeight() {
      if (dashboardRef.current) {
        dashboardRef.current.style.height =
          window.innerHeight - dashboardRef.current.offsetTop + "px";
      }
    }
    setHeight();
    window.addEventListener("resize", setHeight);

    return () => window.removeEventListener("resize", setHeight);
  }, [dashboardRef]);
}
