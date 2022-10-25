import { Box } from "@chakra-ui/react";
import { GoToTop } from "../../../public/assets/icons/GoToTop";

const Top = () => {
  return (
    <GoToTop
      width="35px"
      height="35px"
      display={"inline-block"}
      lineHeight="1em"
      fill={"none"}
      _hover={{ color: "#e32b6c" }}
    />
  );
};

export default Top;
