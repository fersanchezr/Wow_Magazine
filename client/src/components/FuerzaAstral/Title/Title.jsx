import React from "react";
import { Flex, Box, Grid, Text, Image, GridItem } from "@chakra-ui/react";
import Link from "next/link";

const Title = ({ data }) => {
  return (
    <Box justifyContent="center" width="100%" pt="30px" pl={{ lg: "30px" }}>
      <Grid templateColumns="1fr">
        <Flex justifyContent="space-between">
          <div style={{ gridColumn: "span 6/span 6" }}>
            <Flex
              pt="10px"
              pb="30px"
              paddingInlineStart="0px"
              paddingInlineEnd="0px"
              padding={{ base: "0px 24px 20px", lg: "10px 0px 30px" }}
            >
              <Box cursor="pointer" h="100%" position="relative">
                <Link href="/">
                  <Flex alignItems="flex-end">
                    <Image src={data.Icon} maxH="35px" />
                    <Text
                      as="h3"
                      ml="10px"
                      lineHeight="32px"
                      height="32px"
                      color={data.Color}
                      textTransform="uppercase"
                      fontWeight="400"
                      position="relative"
                      fontSize={{ base: "20px", lg: "24px" }}
                    >
                      {data.Name}
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

export default Title;
