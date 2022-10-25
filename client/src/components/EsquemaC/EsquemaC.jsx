import React from "react";
import SectionTitle from "../../commons/SectionTitle";
import Section from "./Section/Section";
import { Flex, Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";

const EsquemaC = ({ data }) => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      mb="50px"
      justifyContent='center'
      alignItems='center'
    >
      <Section data={data} />
    </Flex>
  );
};

export default EsquemaC;
