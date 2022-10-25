import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ImgPrincipal from "./ImgPrincipal";
import PodcastCarousel from "./PodastCarousel/PodcastCarousel";
import VideosCarousel from "./VideosCarousel/VideosCarousel";

const WowPlay = () => {
  return (
    <Flex flexDirection="column" backgroundColor="black" pb="30px">
      <Flex direction="column" mr={{ xl: "30%" }} ml={{ xl: "10%" }}>
        <Text
          fontSize="30px"
          fontFamily="var(--chakra-fonts-heading)"
          color="white"
          p={5}
        >
          <strong style={{ color: "#ee296e", fontSize: "35px" }}>WOW!</strong>{" "}
          PLAY
        </Text>
        <ImgPrincipal />
        <VideosCarousel />
        <Text
          fontSize="30px"
          fontFamily="var(--chakra-fonts-heading)"
          color="white"
          mt="30px"
        >
          <strong style={{ color: "#ee296e", fontSize: "35px" }}>WOW!</strong>{" "}
          CAST
        </Text>
        <PodcastCarousel />
      </Flex>
    </Flex>
  );
};

export default WowPlay;
