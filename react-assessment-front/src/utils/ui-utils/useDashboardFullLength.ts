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
        const height =
          window.innerHeight - dashboardRef.current.offsetTop + "px";
        dashboardRef.current.style.height = height;
        dashboardRef.current.style.maxHeight = height;
      }
    }
    setHeight();
    window.addEventListener("resize", setHeight);

    return () => window.removeEventListener("resize", setHeight);
  }, [dashboardRef]);
}
