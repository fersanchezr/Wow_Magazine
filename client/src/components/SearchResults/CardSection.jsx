import React from "react";
import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { More } from "../../../public/assets/icons";
import Card from "./Card";

const CardSection = ({ data }) => {
  const [postNum, setPostNum] = useState(3); // Default number of posts dislplayed
  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 3); // 3 is the number of posts you want to load per click
  }
  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={6}
        pt={"40px"}
      >
        {data &&
          data.slice(0, postNum).map((ele, i) => {
            return <Card data={ele} key={i} index={i} />;
          })}
      </Grid>
      {postNum < data.length && (
        <Flex justify={"center"} width={"100%"} mb={"1rem"} mt={"1rem"}>
          <Button
            fontWeight={600}
            fontSize={"1rem"}
            color={"#718096"}
            background={"transparent"}
            mt={"20px"}
            _hover={{ background: "transparent", color: "#e32b6c" }}
            onClick={handleClick}
          >
            <Box as="p">Cargar más</Box>
            <Box marginInlineStart={"0.5rem"} background={"none"}>
              <More w="34px" h="35px" fill={"none"} />
            </Box>
          </Button>
        </Flex>
      )}
    </>
  );
};

export default CardSection;
