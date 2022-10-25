import React from "react";
import Top from "./Top/Top";
import BottomMenu from "./Bottom/BottomMenu";
import SearchBar from "./Bottom/SearchBar";
import { Flex, Box, Image } from "@chakra-ui/react";
import BeltAds from "../../commons/ads/BeltAds";

const Navbar = ({ menu, banners }) => {
  return (
    <Flex
      as={"header"}
      direction="column"
      alignItems={"center"}
      width="100%"
      position={"sticky"}
      top={0}
      boxShadow={{ base: "0 0 5px 2px rgba(0,0,0, .09)", lg: "none" }}
      zIndex={1000}
      background="white"
    >
      <Flex display={{ base: "block", lg: "none" }}>
        <Image src={banners[0]?.adhesion[0].url} />
      </Flex>
      <Top />
      <Box width="100%" display={{ base: "none", lg: "block" }}>
        <BottomMenu menu={menu} />
        <SearchBar />
      </Box>
    </Flex>
  );
};

export default Navbar;
