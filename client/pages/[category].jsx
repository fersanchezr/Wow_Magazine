import React from "react";
import axios from "axios";
import { Box, Flex, Text } from "@chakra-ui/react";
import EsquemaD from "../src/components/EsquemaD/";
import Link from "next/link";

const Category = ({ content }) => {
  return (
    <Flex direction={"column"}>
      <Flex
        w="100%"
        backgroundColor={content.color}
        backgroundImage={`url(${content.banner})`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        p="2rem"
      >
        <Flex
          direction={"column"}
          w={"100%"}
          align={"center"}
          justify={"center"}
          color={"white"}
        >
          <Box>
            <Flex fontSize={"0.889rem"} align={"center"} justify={"center"}>
              <Link href="/">
                <Text mr={"4px"} cursor={"pointer"}>
                  WOW!
                </Text>
              </Link>{" "}
              •
              <Text ml={"4px"} fontWeight={"700"}>
                {" "}
                {content.name.toUpperCase()}
              </Text>
            </Flex>
            <Text
              as={"h1"}
              fontWeight={"700"}
              fontSize={"1.875rem"}
              textTransform={"uppercase"}
              textAlign={"center"}
            >
              {content.name}
            </Text>
            <Text fontSize={"0.889rem"}>{content.Description}</Text>
          </Box>
        </Flex>
      </Flex>
      <Box ml={{ lg: "70px" }} mr={{ lg: "70px" }}>
        {content.sub_categories.map(
          (subcategory, i) =>
            subcategory.notes.length > 0 && (
              <EsquemaD key={i} data={subcategory} />
            ),
        )}
      </Box>
    </Flex>
  );
};

export default Category;

export async function getServerSideProps({ params: { category } }) {
  const res = await axios.get("https://strapi-production-b364.up.railway.app/categories");
  const content = await res.data.find((element) => element.route === category);

  return {
    props: {
      content,
    },
  };
}
