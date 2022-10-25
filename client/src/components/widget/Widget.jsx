import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";

const Widget = ({ widget }) => {
  return (
    <Flex justifyContent="space-around">
      <Flex flexDirection="column" width="100%" height="100%">
        <Top />
        <Bottom data={widget} />
      </Flex>
    </Flex>
  );
};

export default Widget;
