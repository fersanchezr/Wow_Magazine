import React from "react";
import { Flex, Grid, Box, GridItem } from "@chakra-ui/react";
import Magazine from "./Magazine";
import Socials from "./Socials/Socials";
import Line from "./Line";
import Menu from "./Menu/Menu";
import Top from "./Top";
import LegalTerms from "./LegalTerms/LegalTerms";

const Footer = () => {
  return (
    <Flex width={"100%"} backgroundColor={"white"} justify={"center"}>
      <Flex
        justify={"center"}
        paddingTop={"35px"}
        paddingBottom={"35px"}
        width={"100%"}
        marginInlineEnd={{ base: "28px", xl: "0px" }}
        marginInlineStart={{ base: "28px", xl: "0px" }}
      >
        <Grid
          rowGap={35}
          width={"100%"}
          templateAreas={{
            base: `"Socials"
        "Menu"
        "Line"
        "LegalTerms"`,
            lg: `"Socials Menu"
        "LegalTerms LegalTerms"`,
            xl: `"Magazine Socials Menu Top"
        
        "Line Line Line Line"
        ". LegalTerms LegalTerms ."`,
          }}
          templateRows={"auto auto auto auto"}
          columnGap={{ xl: "50px" }}
          templateColumns={{ xl: "158px 1fr 1.5fr 52px" }}
        >
          <GridItem
            display={{ base: "none", xl: "block" }}
            area={"Magazine"}
            width="158px"
          >
            <Magazine />
          </GridItem>
          <GridItem area={"Socials"}>
            <Socials />
          </GridItem>
          <GridItem area={"Line"}>
            <Line />
          </GridItem>
          <GridItem area={"Menu"} alignSelf={{ lg: "end" }}>
            <Menu />
          </GridItem>
          <GridItem
            display={{ base: "none", xl: "block" }}
            color="#757575"
            alignSelf={"end"}
            marginBottom={"8px"}
            cursor="pointer"
            area={"Top"}
          >
            <Top />
          </GridItem>
          <GridItem area={"LegalTerms"}>
            <LegalTerms />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Footer;
