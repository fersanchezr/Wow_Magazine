import {
  Flex,
  Link,
  Box,
  Text,
  Image,
  IconButton,
  GridItem,
  Divider,
} from "@chakra-ui/react";
import { Play } from "../../../../public/assets/icons";
import styles from "../../FuerzaAstral/Section/Section.module.css";
const Card = ({ item, i }) => {
  return (
    <GridItem
      as="article"
      gridColumn="span 6/span 6"
      position="relative"
      w="100%"
      h="auto"
      bgColor="black"
      mt="2rem"
      key={i}
    >
      <Flex
        flexDirection="column"
        w="100%"
        maxW="100vw"
        cursor="pointer"
        height="100%"
        overflow="hidden"
      >
        <Flex
          position="relative"
          w="100%"
          h="0px"
          pt="calc(520% / 8.20)"
          maxH="520px"
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            h="370px"
            w="100%"
            maxW="206px"
            objectFit="cover"
            src={item.field_img_primary}
          />
        </Flex>
        <Flex
          justifyContent="center"
          textAlign={{ base: "left", lg: "center" }}
          pt="25px"
          maxW="206px"
          height="auto"
          flex="1 auto"
          flexDirection="column"
          alignItems="flex-start"
          fontSize={{ base: "20px", lg: "25.6px" }}
        >
          <Text
            as="h2"
            lineHeight="26px"
            h="78px"
            mb="1rem"
            color="white"
            fontSize="18px"
            fontFamily="var(--chakra-fonts-heading)"
          >
            <strong>{item.field_title_pre} </strong>
            {item.field_title}
          </Text>
          <Divider w="15%" mb={2} />
          <Text as="h6" fontSize="14px" color="white" pl="25px">
            por <strong>{item.field_credits}</strong>
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default Card;
