import {
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  Input,
  Button,
  Box,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  InputGroup,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import DrawerFooterContent from "./DrawerFooterContent";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Search } from "../../../../public/assets/icons";
import data from "./data.json";
import { useRouter } from "next/router";
import { useState } from "react";
const DrawerMenu = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/results?search=${inputValue}`);
    setInputValue("");
  };
  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader padding={"10px 10px 10px 70px"}>
        <Image src="/assets/WOW-logo.svg" alt={"WOW logo"} height={"29px"} />
      </DrawerHeader>

      <DrawerBody pl={"10px"}>
        <form onSubmit={handleSubmit}>
          <InputGroup pl={"10px"}>
            <Input
              onChange={onChange}
              value={inputValue}
              placeholder="BUSCAR"
              borderBottom={"1px solid #343434"}
              borderTop={"none"}
              borderRight={"none"}
              borderLeft={"none"}
              borderRadius={"none"}
              focusBorderColor="none"
              marginBottom={"22px"}
              width={"100%"}
              position={"relative"}
            />
            <Flex
              height={"2.5rem"}
              width={"2.5rem"}
              position={"absolute"}
              top={0}
              zIndex={2}
              right={0}
              align={"center"}
              justify={"center"}
            >
              <Button
                background={"transparent"}
                _hover={{ color: "#e32b6c" }}
                display={"flex"}
              >
                <Search width={"37px"} height={"37px"} fill={"none"} />
              </Button>
            </Flex>
          </InputGroup>
        </form>
        <Accordion allowToggle pl={"10px"}>
          {data.map((item, index) => (
            <AccordionItem key={index} border={"none"} mt={"16px"} mb={"15px"}>
              <Flex
                direction={"row"}
                justifyItems={"center"}
                align={"flex-start"}
              >
                <Box textAlign="left" textTransform={"capitalize"}>
                  <Link href={`${item.url}`} style={{ cursor: "pointer" }}>
                    {item.category}
                  </Link>
                </Box>

                <AccordionButton
                  width={"auto"}
                  alignSelf={"center"}
                  padding={0}
                >
                  <AccordionIcon />
                </AccordionButton>
              </Flex>
              <AccordionPanel pb={4} pl={0}>
                <Flex direction={"column"} textTransform={"capitalize"}>
                  {item.subcategory.map((sub, index) => (
                    <Link
                      href="/"
                      key={index}
                      style={{ marginTop: "0.5rem", cursor: "pointer" }}
                    >
                      {sub}
                    </Link>
                  ))}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </DrawerBody>
      <DrawerFooterContent />
    </DrawerContent>
  );
};

export default DrawerMenu;
