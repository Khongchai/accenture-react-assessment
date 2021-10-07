import { Box } from "@chakra-ui/layout";
import React from "react";
import Contact from "../../../types/Contact";
import LoadingIcon from "../../shared/LoadingIcon";
import DesktopList from "./DesktopList";
import MobileList from "./MobileList";

interface InfoType {
  contacts?: Contact[];
  setRefetchtoggle: React.Dispatch<React.SetStateAction<boolean>>;
  allowEdit: boolean;
}

const Info: React.FC<InfoType> = ({
  contacts,
  setRefetchtoggle: setRefetchToggle,
  allowEdit,
}) => {
  return (
    <Box height="90%" overflowY={["unset", null, null, "auto"]}>
      {contacts ? (
        <>
          <Box display={["none", null, null, "block"]}>
            <DesktopList
              allowEdit={allowEdit}
              setRefetchToggle={setRefetchToggle}
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