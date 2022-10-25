import { Flex, Link, Box, Text } from "@chakra-ui/react";

const Card = ({ item, index }) => {
  return (
    <Flex
      key={index}
      padding={"12px"}
      marginInline={"10px"}
      marginTop={"10px"}
      marginBottom={"10px"}
      height={"100%"}
      direction={"column"}
      align={"center"}
      borderRadius={"6px"}
      backgroundColor={"white"}
      filter={"drop-shadow(rgba(192, 188, 210, 0.28) 1px 3px 3px)"}
    >
      <Link style={{ textDecoration: "none" }}>
        <Box
          backgroundImage={`url(${item.image})`}
          backgroundSize={"cover"}
          height={"155px"}
          width={"116px"}
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
        ></Box>
        <Box textAlign={"center"}>
          <Text
            textTransform={"uppercase"}
            color={"#6f66db"}
            fontWeight={700}
            fontSize={"0.875rem"}
          >
            {item.name}
          </Text>
          <Text color={"#757575"} mb={"10px"} fontSize={"0.667rem"}>
            {item.period}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
};

export default Card;
