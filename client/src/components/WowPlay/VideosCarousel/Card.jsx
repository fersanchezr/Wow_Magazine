import { Flex, Link, Box, Text, Image, IconButton } from "@chakra-ui/react";
import { Play } from "../../../../public/assets/icons";

const Card = ({ item, index }) => {
  return (
    <Flex
      key={index}
      align={"center"}
      backgroundColor={"black"}
      filter={"drop-shadow(rgba(192, 188, 210, 0.28) 1px 3px 3px)"}
    >
      <Image
        h="370px"
        w="100%"
        maxW="206px"
        objectFit="cover"
        borderRadius={"8px"}
        src={item.field_img_primary}
      />
      <Box
        h="370px"
        w="100%"
        maxW="226px"
        objectFit="cover"
        borderRadius={"8px"}
        position="absolute"
        boxShadow="1px -55px 127px -6px rgba(0,0,0,0.75) inset;"
      >
        <IconButton
          borderRadius="3xl"
          top="58%"
          variant="outline"
          icon={<Play color="white" bgColor="none" />}
        ></IconButton>
        <Text as="h2" color="white" position="absolute" bottom="47px">
          <strong>{item.field_title_pre}</strong>
          {item.field_title}
        </Text>
      </Box>
    </Flex>
  );
};

export default Card;
