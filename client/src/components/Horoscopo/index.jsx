import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import EmblaCarousel from "./Carousel/EmblaCarousel";
import CardTable from "./CardTable";
const index = () => {
  //for the date
  let date = new Date();
  let today = date
    .toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })
    .replace(",", "");
  return (
    <Flex pb={"50px"} justify={"center"} background={"#f1efff"} mt={"20px"}>
      <Box
        paddingInline={"10px"}
        paddingTop={"25px"}
        paddingBottom={"25px"}
        width={"100%"}
      >
        <Box>
          <Heading
            as="h3"
            fontSize={"1.875rem"}
            lineHeight={"1.33"}
            color={"#6f66db"}
          >
            Horóscopo de hoy
          </Heading>
          <Text textTransform={"capitalize"} color={"#757575"} mb={"1rem"}>
            {today}
          </Text>
        </Box>
        <EmblaCarousel />
        <CardTable />
      </Box>
    </Flex>
  );
};

export default index;
