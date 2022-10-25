import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Makers = ({ data }) => {
  return (
    <Flex flexDirection='column' backgroundColor="#f5f5f5">
    <Flex
      pl={{ lg: "30px" }}
      pr={{ lg: "30px" }}
      justifyContent="center"
      flexDirection="column"
      mt={"30px"}
      pt="30px"
      pb="30px"
      alignItems='center'
      mr={{ xl: '300px' }}
    >
      <Flex pb="30px" width={{ base: "100%", lg: "100%", xl: "52%" }} >
        <Image src={data.Icon} sizes="sm" />
        <Link href={"https://www.somosohlala.com/makers"}>
          <a>
            <Center
              justifyContent={"center"}
              alignItems={"center"}
              color="#E1B239"
              fontSize={20}
              textTransform="uppercase"
              ml={5}
              cursor="pointer"
            >
              {data.Name}
            </Center>
          </a>
        </Link>
        <Spacer />
        <Link href={"https://www.somosohlala.com/makers"}>
          <a>
            <Button
              rightIcon={<ArrowForwardIcon />}
              color="#757575"
              variant="outline"
              borderRadius="20px"
              _hover={{ color: "#E1B239" }}
            >
              Ir al sitio
            </Button>
          </a>
        </Link>
      </Flex>
      <Flex position="relative" width={{ base: "100%", lg: "100%", xl: "100%", xxl:'70%' }}>
        <Image src={data.Content[0].MainImage.url} w="100%" />
      </Flex>
      <Flex
        position="absolute"
        flexDirection="column"
          width={{ base: "100%", lg: "100%", xl: "70%" }}
          bottom={{xl:'500px'}}
          left={{ base: '0px', md: '0px', lg:'0px', xl: '100px', xxl:'250px' }}
          p='50px'
      >
      </Flex>
      </Flex>
    </Flex>
  );
};

export default Makers;
