import {
  Flex,
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Card from "./CardSection";

const index = ({ data }) => {
  return (
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
      <Box as="h1" fontSize={{ base: "1rem", lg: "1.6rem" }} fontWeight={700}>
        RESULTADO DE BÚSQUEDA
      </Box>
      <Text color={"rgb(106, 106, 106)"}>
        {data.length === 1
          ? "1 resultado encontrado"
          : `Se encontraron ${data.length} resultados`}
      </Text>
      <Card data={data} />
    </Flex>
  );
};

export default index;
