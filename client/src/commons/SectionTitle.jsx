import React from "react";
import { Flex, Box, Grid, Text, Image, GridItem } from "@chakra-ui/react";
import Link from "next/link";

const SectionTitle = ({ icon, color, title }) => {
  return (
    <Box justifyContent="center" width="100%" pt="30px">
      <Grid templateColumns="2fr 1fr" gap={6}>
        <Flex justifyContent="space-between">
          <div style={{ gridColumn: "span 6/span 6" }}>
            <Flex
              pt="10px"
              pb="30px"
              paddingInlineStart="0px"
              paddingInlineEnd="0px"
              padding={{ base: "0px 24px 20px", lg: "10px 0px 10px" }}
            >
              <Box cursor="pointer" h="100%" position="relative">
                <Link href="/">
                  <Flex alignItems="flex-end">
                    <Image
                      src={icon}
                      maxH="35px"
                      position={"relative"}
                      top={"-6px"}
                    />
                    <Text
                      as="h3"
                      ml="10px"
                      lineHeight="32px"
                      height="32px"
                      color={color}
                      textTransform="uppercase"
                      fontWeight="400"
                      position="relative"
                      fontSize={{ base: "1.444rem", lg: "24px" }}
                    >
                      {title}
                    </Text>
                  </Flex>
                </Link>
              </Box>
            </Flex>
          </div>
        </Flex>
      </Grid>
    </Box>
  );
};

export default SectionTitle;
