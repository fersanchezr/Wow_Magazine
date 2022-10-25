import React from "react";
import axios from "axios";
import SearchResults from "../src/components/SearchResults";
import { Flex, Box, BreadcrumbItem, Breadcrumb, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

const results = ({ results }) => {
  return (
    <Flex width="100%" justifyContent="center" flexDirection="column">
      {results.length === 0 && (
        <Flex direction={"column"} pt={"5%"} pb={"5%"} paddingInline={"15px"}>
          <Breadcrumb
            separator={<ChevronRightIcon color="gray.500" />}
            color={"rgb(106, 106, 106)"}
          >
            <BreadcrumbItem>
              <Link href="/">WOW!</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/">BUSCADOR</Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box
            as="h1"
            fontSize={{ base: "1rem", lg: "1.6rem" }}
            fontWeight={700}
          >
            NO HAY RESULTADOS PARA SU BÚSQUEDA
          </Box>
          <Text color={"rgb(106, 106, 106)"}>
            Su búsqueda no ha tenido resultados
          </Text>
        </Flex>
      )}
      {results.length > 0 && <SearchResults data={results} />}
    </Flex>
  );
};

export default results;

export async function getServerSideProps({ query: { search } }) {
  const res = await axios.get(
    `https://strapi-production-b364.up.railway.app/notes?Title_contains=${search}`,
  );
  const results = await res.data;

  return {
    props: {
      results,
    },
  };
}
