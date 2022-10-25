import { Button, Flex, Link, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Horoscopo, Makers, Play } from "../../../public/assets/icons";

const index = () => {
  return (
    <Flex
      id="sectionsBar"
      width={"100%"}
      justify={"center"}
      align={"center"}
      pt={{ base: "0px", lg: "40px" }}
      pb={{ base: "0px", lg: "40px" }}
      paddingInlineEnd={{ base: "0px", lg: "1.5rem" }}
      paddingInlineStart={{ base: "0px", lg: "1.5rem" }}
      background={{ base: "#f4f4f4", lg: "#f7f7f7" }}
    >
      <Flex
        width={"100%"}
        pt={{ base: "0px", lg: "15px" }}
        pb={{ base: "0px", lg: "15px" }}
        borderBottom={{ base: "1px solid", lg: "none" }}
        borderRadius={{ lg: "24px" }}
        backgroundColor={{ lg: "white" }}
      >
        <Flex
          pt={{ base: "15px", lg: "0px" }}
          pb={{ base: "15px", lg: "0px" }}
          align={"center"}
          justify={"center"}
          borderRight={"1px solid"}
          flex={"1 1 auto"}
          borderColor={"#757575"}
        >
          <Link href="#">
            <Button
              background={"transparent"}
              width={"80px"}
              height={"auto"}
              fontSize={"1.15rem"}
              color={"#343434"}
              paddingInlineEnd={0}
              paddingInlineStart={0}
              flexDirection={{ base: "column", lg: "row" }}
              _hover={{ background: "transparent" }}
            >
              <Box mb={{ base: "10px", lg: "0px" }} pr={{ lg: "1rem" }}>
                <Flex
                  width={{ base: "35px", lg: "50px" }}
                  height={{ base: "35px", lg: "50px" }}
                  borderRadius={"100%"}
                  color={"white"}
                  background={"#343434"}
                  justify={"center"}
                  align={"center"}
                >
                  <Box
                    transform={"rotate(0deg)"}
                    transition={"all .8s ease-in-out"}
                  >
                    <Play
                      width={{ base: "12px", lg: "19px" }}
                      height={"25px"}
                      ml={"2px"}
                      fill={"none"}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box
                fontSize={{ base: "10px", lg: "0.875rem" }}
                fontWeight={400}
                textAlign={{ base: "center", lg: "initial" }}
              >
                WOW!
                <Text display={{ base: "block", lg: "inline" }}> PLAY</Text>
              </Box>
            </Button>
          </Link>
        </Flex>
        <Flex
          pt={{ base: "15px", lg: "0px" }}
          pb={{ base: "15px", lg: "0px" }}
          align={"center"}
          justify={"center"}
          borderRight={"1px solid"}
          flex={"1 1 auto"}
          borderColor={"#757575"}
        >
          <Link href="#">
            <Button
              background={"transparent"}
              width={"80px"}
              height={"auto"}
              fontSize={"1.15rem"}
              color={"#343434"}
              paddingInlineEnd={0}
              paddingInlineStart={0}
              flexDirection={{ base: "column", lg: "row" }}
              _hover={{ background: "transparent" }}
            >
              <Box mb={{ base: "10px", lg: "0px" }} pr={{ lg: "1rem" }}>
                <Flex
                  width={{ base: "35px", lg: "50px" }}
                  height={{ base: "35px", lg: "50px" }}
                  borderRadius={"100%"}
                  color={"white"}
                  background={"#e1b239"}
                  justify={"center"}
                  align={"center"}
                >
                  <Box
                    transform={"rotate(0deg)"}
                    transition={"all .8s ease-in-out"}
                  >
                    <Makers
                      width={{ base: "25px", lg: "35px" }}
                      height={"25px"}
                      ml={"2px"}
                      fill={"none"}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box
                fontSize={{ base: "10px", lg: "0.875rem" }}
                fontWeight={400}
                textAlign={{ base: "center", lg: "initial" }}
              >
                ESCUELA
                <Text display={{ base: "block", lg: "inline" }}> MAKERS</Text>
              </Box>
            </Button>
          </Link>
        </Flex>
        <Flex
          pt={{ base: "15px", lg: "0px" }}
          pb={{ base: "15px", lg: "0px" }}
          align={"center"}
          justify={"center"}
          flex={"1 1 auto"}
        >
          <Link href="#">
            <Button
              background={"transparent"}
              width={"80px"}
              height={"auto"}
              fontSize={"1.15rem"}
              color={"#343434"}
              paddingInlineEnd={0}
              paddingInlineStart={0}
              flexDirection={{ base: "column", lg: "row" }}
              _hover={{ background: "transparent" }}
            >
              <Box mb={{ base: "10px", lg: "0px" }} pr={{ lg: "1rem" }}>
                <Flex
                  width={{ base: "35px", lg: "50px" }}
                  height={{ base: "35px", lg: "50px" }}
                  borderRadius={"100%"}
                  color={"white"}
                  background={"#6f66db"}
                  justify={"center"}
                  align={"center"}
                >
                  <Box
                    transform={"rotate(0deg)"}
                    transition={"all .8s ease-in-out"}
                  >
                    <Horoscopo
                      width={{ base: "18px", lg: "26px" }}
                      height={{ base: "25px", lg: "33px" }}
                      ml={"2px"}
                      fill={"none"}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box
                fontSize={{ base: "10px", lg: "0.875rem" }}
                fontWeight={400}
                textAlign={{ base: "center", lg: "initial" }}
              >
                HORÓSCOPO
                <Text display={{ base: "block", lg: "none" }}> DE HOY</Text>
              </Box>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default index;
