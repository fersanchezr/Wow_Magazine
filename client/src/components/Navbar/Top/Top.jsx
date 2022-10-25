import React from "react";
import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Image,
  Button,
  Drawer,
  DrawerOverlay,
} from "@chakra-ui/react";
import styles from "./Top.module.css";
import {
  Search,
  BurgerMenu,
  Instagram,
  Youtube,
  Horoscopo,
  Makers,
  Play,
} from "../../../../public/assets/icons";
import { useDisclosure } from "@chakra-ui/react";
import DrawerMenu from "./DrawerMenu";
import NewsletterComponent from "./NewsletterComponent";
import { useScrollPosition } from "../../../../hooks/useScroll";
import SearchBar from "../Bottom/SearchBar";
import Link from "next/link";

const Top = () => {
  //for the drawer

  const { isOpen, onOpen, onClose } = useDisclosure();
  const position = useScrollPosition();

  //for the bottom menu

  const handleBottomMenu = () => {
    document.getElementById("searchBar").style.display =
      document.getElementById("searchBar").style.display === "none"
        ? "flex"
        : "none";
    document.getElementById("bottomMenu").style.display =
      document.getElementById("bottomMenu").style.display === "flex"
        ? "none"
        : "flex";
  };

  return (
    <>
      <Flex
        justifyContent={{ base: "flex-start", lg: "space-between" }}
        width="100%"
        paddingTop={{ base: "10px", lg: "8px" }}
        paddingBottom={{ base: "10px", lg: "8px" }}
        paddingInlineEnd={{ base: "10px", lg: "30px" }}
        paddingInlineStart={{ base: "10px", lg: "30px" }}
        position="relative"
        color={"#757575"}
      >
        <Box display={{ base: "flex", lg: "none" }}>
          <Button
            className={styles.burgerMenu}
            _hover={{ color: "#e32b6c" }}
            background="transparent"
            padding={0}
            margin={0}
            overflow="visible"
            height={"auto"}
            onClick={onOpen}
          >
            <BurgerMenu width={"18px"} height={"13px"} display="inline-block" />
          </Button>
        </Box>

        <Box
          display={{ base: "none", lg: "flex" }}
          alignItems={"center"}
          justifyContent={"flex-end"}
          position={"relative"}
          color=" rgb(117, 117, 117)"
        >
          {position > 0 && <NewsletterComponent />}
          {position < 0 && (
            <Flex
              gap={"15px"}
              id="colorfulIcons"
              transition={"all .3s ease-in-out"}
            >
              <Flex
                height={"50px"}
                width={"50px"}
                borderRadius={"100%"}
                background={"#343434"}
                justify={"center"}
                align={"center"}
              >
                <Box>
                  <Play height={"25px"} width={"19px"} fill={"none"} />
                </Box>
              </Flex>
              <Flex
                height={"50px"}
                width={"50px"}
                borderRadius={"100%"}
                background={"#E1B239"}
                justify={"center"}
                align={"center"}
              >
                <Box>
                  <Makers height={"25px"} width={"35px"} fill={"none"} />
                </Box>
              </Flex>
              <Flex
                height={"50px"}
                width={"50px"}
                borderRadius={"100%"}
                background={"#6F66DB"}
                justify={"center"}
                align={"center"}
                position={"relative"}
              >
                <Box>
                  <Horoscopo height={"33px"} width={"26px"} fill={"none"} />
                </Box>
              </Flex>
            </Flex>
          )}

          <Flex position={"absolute"} top={"0px"} bottom={"0px"} left={"200px"}>
            <Flex
              justify={"space-evenly"}
              align={"center"}
              width={"auto"}
              direction={"row"}
            >
              <a
                href="https://www.instagram.com/revistaohlala/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flex
                  align={"center"}
                  justify={"center"}
                  cursor={"pointer"}
                  marginRight={"15px"}
                  _hover={{ color: "#e32b6c" }}
                >
                  <Instagram width={"22px"} height={"20px"} fill={"none"} />
                </Flex>
              </a>
              <a
                href="https://www.youtube.com/channel/UCWm1M6xBClBxJhhAOSqPj0g?app=desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flex
                  align={"center"}
                  justify={"center"}
                  cursor={"pointer"}
                  marginRight={"15px"}
                  _hover={{ color: "#e32b6c" }}
                >
                  <Youtube width={"22px"} height={"20px"} fill={"none"} />
                </Flex>
              </a>
            </Flex>
          </Flex>
        </Box>

        <Flex alignItems={"center"}>
          <h1 style={{ margin: "0px" }}>
            <Link href="/" alt={"Ir a Home"}>
              <Box className={styles.topLogo}></Box>
            </Link>
          </h1>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"flex-end"}
          marginLeft={{ base: "auto", lg: "0px" }}
        >
          <Button
            display={{ base: "none", lg: "block" }}
            borderRadius={"40px"}
            background={"#e32b6c"}
            _hover={{ bg: "#e32b6c" }}
            height={"32px"}
            color={"white"}
            fontWeight={600}
            paddingInline={"1.11rem"}
            fontSize={"0.875rem"}
          >
            <a
              href="https://www.contacto.lanacion.com.ar/org-suscribirse-print-ohlala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>SUSCRIBITE</p>
            </a>
          </Button>
          <Button
            background={"transparent"}
            display={{ base: "none", lg: "block" }}
            _hover={{ color: "#e32b6c" }}
            onClick={handleBottomMenu}
          >
            <Search width={"37px"} height={"37px"} fill={"none"} />
          </Button>
          {position > 0 && (
            <Box display={{ lg: "none" }} id="newsMobile">
              <NewsletterComponent />
            </Box>
          )}
          {position < 0 && (
            <Box
              display={{ base: "flex", lg: "none" }}
              gap={"15px"}
              id="colorfulIcons"
              transition={"all .3s ease-in-out"}
            >
              <Flex
                height={"35px"}
                width={"35px"}
                borderRadius={"100%"}
                background={"#343434"}
                justify={"center"}
                align={"center"}
              >
                <Box>
                  <Play height={"25px"} width={"12px"} fill={"none"} />
                </Box>
              </Flex>
              <Flex
                height={"35px"}
                width={"35px"}
                borderRadius={"100%"}
                background={"#E1B239"}
                justify={"center"}
                align={"center"}
              >
                <Box>
                  <Makers height={"25px"} width={"25px"} fill={"none"} />
                </Box>
              </Flex>
              <Flex
                height={"35px"}
                width={"35px"}
                borderRadius={"100%"}
                background={"#6F66DB"}
                justify={"center"}
                align={"center"}
              >
                <Box>
                  <Horoscopo height={"25px"} width={"18px"} fill={"none"} />
                </Box>
              </Flex>
            </Box>
          )}
        </Flex>
      </Flex>
      <Drawer
        placement={"left"}
        isOpen={isOpen}
        size={"full"}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerMenu />
      </Drawer>
    </>
  );
};

export default Top;
