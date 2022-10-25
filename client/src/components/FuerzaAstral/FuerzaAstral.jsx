import React from "react";
import { Flex, Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import Title from "./Title/Title";
import Section from "./Section/Section";

const FuerzaAstral = ({ data }) => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      mb="50px"
      mt="50px"
      alignItems="center"
      id={`${data._id}`}
    >
      <Section data={data} />
    </Flex>
  );
};

export default FuerzaAstral;
