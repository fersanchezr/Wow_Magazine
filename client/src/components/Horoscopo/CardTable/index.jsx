import { Flex, Box, Text } from "@chakra-ui/react";
import { HandPointingRight } from "../../../../public/assets/icons";
import signos from "../signos.json";
import Card from "./Card";

const index = () => {
  return (
    <Box
      display={{ base: "none", lg: "flex" }}
      height={"700px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        perspective={"1000px"}
        justify={"center"}
        w={"349px"}
        h={"521px"}
        align={"center"}
      >
        <Box width={"349px"} height={"521px"}>
          <Box width={"349px"} height={"521px"}>
            <Flex
              backgroundImage={`url(https://www.somosohlala.com/images/CardBack.png)`}
              width={"349px"}
              height={"530px"}
              direction={"column"}
              borderRadius={"10px"}
              border={"1px solid #6f66db"}
              align={"center"}
              justify={"center"}
            >
              <Text
                fontSize={"1.6rem"}
                color={"#6f66db"}
                mb={"10px"}
                textAlign={"center"}
              >
                TOCA LA CARTA
                <br />
                DE TU SIGNO
              </Text>
              <HandPointingRight width={"42px"} height={"35px"} fill={"none"} />
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Flex h={"100%"}>
        <Flex
          direction={"column"}
          align={"end"}
          justify={"flex-end"}
          height={"100%"}
        >
          {signos.slice(0, 3).map((item, index) => (
            <Card key={index} index={index} item={item} />
          ))}
        </Flex>
        <Flex
          direction={"column"}
          align={"start"}
          justify={"flex-start"}
          height={"100%"}
        >
          {signos.slice(3, 6).map((item, index) => (
            <Card key={index} index={index} item={item} />
          ))}
        </Flex>
        <Flex
          direction={"column"}
          align={"end"}
          justify={"flex-end"}
          height={"100%"}
        >
          {signos.slice(6, 9).map((item, index) => (
            <Card key={index} index={index} item={item} />
          ))}
        </Flex>
        <Flex
          direction={"column"}
          align={"start"}
          justify={"flex-start"}
          height={"100%"}
        >
          {signos.slice(9, 12).map((item, index) => (
            <Card key={index} index={index} item={item} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default index;
