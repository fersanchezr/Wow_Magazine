import { Flex } from "@chakra-ui/react";
import React from "react";
import Title from "../FuerzaAstral/Title/Title";
import Section from "./Section/Section";

const Dimensiones = ({ data }) => {
  return (
    <Flex
      id={`${data._id}`}
      flexDirection="column"
      width="100%"
      mb="50px"
      mt={{ md: "500px", lg: "auto" }}
      justifyContent="center"
      alignItems="center"
    >
      <Section data={data} />
    </Flex>
  );
};

export default Dimensiones;
