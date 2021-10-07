import { Box } from "@chakra-ui/layout";
import React from "react";
import Contact from "../../../types/Contact";
import LoadingIcon from "../../shared/LoadingIcon";
import DesktopList from "./DesktopList";
import MobileList from "./MobileList";

const Info: React.FC<{
  contacts?: Contact[];
  setRefetchSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ contacts, setRefetchSwitch }) => {
  return (
    <Box height="90%" overflowY="auto">
      {contacts ? (
        <>
          <Box display={["none", null, null, "block"]}>
            <DesktopList
              setRefetchSwitch={setRefetchSwitch}
              contacts={contacts}
            />
          </Box>
          <Box display={["block", null, null, "none"]}>
            <MobileList contacts={contacts} />
          </Box>
        </>
      ) : (
        <Box width="100%">
          <LoadingIcon />
        </Box>
      )}
    </Box>
  );
};

export default Info;
