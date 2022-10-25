import React from "react";
import { Flex } from "@chakra-ui/react";
import SectionTitle from "../../commons/SectionTitle";
import Section from "./Section/Section";

const index = ({ data }) => {
  return (
    <Flex flexDirection="column" width="100%" mb="50px" mt="50px">
      <SectionTitle icon={data.icon} color={data.color} title={data.name} />
      <Section data={data} />
    </Flex>
  );
};

export default index;
