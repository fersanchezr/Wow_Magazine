import {
  GridItem,
  Grid,
  Flex,
  Text,
  Divider,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { titleToSlug } from "../../../hooks/titleToSlug";
const Jumbo = ({ data }) => {
  const titleRoute = `${titleToSlug(data.Content[0].Title.trim())}-${
    data.Content[0]._id
  }`;
  return (
    <Box>
      <Link
        href={`/${data.Content[0].route}/${titleRoute}`}
        style={{
          backgroundColor: "transparent",
          color: "inherit",
          textDecoration: "inherit",
        }}
      >
        <Flex flexDirection="column" position="relative" cursor="pointer">
          <Flex
            w="100%"
            minHeight="50vh"
            h="auto"
            objectFit="cover"
            display={{ lg: "none" }}
          >
            <Image
              src={data.Content[0].images[1].url}
              w="100%"
              minHeight="50vh"
              h="auto"
              objectFit="cover"
              display={{ lg: "none" }}
              position="relative"
            />
            <Box
              position="absolute"
              boxShadow="-0px -188px 100px -5px rgba(0,0,0,0.35) inset"
            ></Box>
          </Flex>

          <Image
            src={data.Content[0].images[0].url}
            w="100vw"
            objectFit="cover"
            position="relative"
            minHeight="30vh"
            display={{ base: "none", lg: "flex" }}
          />
          <Box
            w="100%"
            position="absolute"
            objectFit="cover"
            minHeight="100%"
            display={{ base: "none", lg: "flex" }}
            boxShadow={{
              lg: "500px -0px 100px -5px rgba(0,0,0,0.35) inset",
              xl: "-500px -0px 100px -5px rgba(0,0,0,0.35) inset",
            }}
          ></Box>

          <Flex
            position="absolute"
            bottom={{ base: "20px", lg: "150px", xl: "200px" }}
            left={{ base: "20px", xl: "850px" }}
            flexDirection="column"
          >
            <Text
              fontSize={{ base: "30px" }}
              display={{ lg: "none" }}
              color="white"
              fontFamily="var(--chakra-fonts-heading)"
            >
              <span className="h2Span">{data.Content[0].Title}</span>

              <span className="thin" style={{ fontWeight: 900 }}>
                {data.Content[0].secondaryTittle}
              </span>
            </Text>
            <Box>
              <Text
                className="h2Span"
                fontSize={{ base: "39px" }}
                display={{ base: "none", lg: "flex" }}
                color="white"
              >
                {data.Content[0].Title}
              </Text>
              <Text
                className="h2Span"
                fontSize={{ base: "39px" }}
                display={{ base: "none", lg: "flex" }}
                color="white"
              >
                {data.Content[0].secondaryTittle}
              </Text>

              <Divider
                w="10%"
                orientation="horizontal"
                display={{ lg: "none" }}
              />
              <Text color="white" fontFamily="var(--chakra-fonts-heading)">
                <span className="thin" style={{ fontSize: "11px" }}>
                  Por{" "}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "1500" }}>
                  {`${data.Content[0].author.firstname} ${data.Content[0].author.lastname}`}
                </span>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
};

export default Jumbo;
