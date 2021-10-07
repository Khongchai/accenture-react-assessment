import { Box } from "@chakra-ui/layout";
import React, { useEffect, useRef } from "react";
import useDashboardFullLength from "../../utils/ui-utils/useDashboardFullLength";

const DashboardBackground: React.FC = ({ children }) => {
  const bg = useRef<HTMLElement>();
  useDashboardFullLength(bg);

  return (
    <Box
      ref={bg as any}
      backgroundColor={["white", null, null, "lightBlue"]}
      borderRadius="90px 90px 0 0"
      minHeight={["500px", null, "600px", null, "700px"]}
      padding={["1rem", null, null, "70px"]}
      width="100%"
      height="100%"
    >
      {children}
    </Box>
  );
};

export default DashboardBackground;
