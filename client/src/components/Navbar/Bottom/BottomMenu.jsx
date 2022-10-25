import { Box, Collapse, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import CollapseMenu from "./CollapseMenu";
import data from "./data.json";
import Link from "next/link";

const BottomMenu = ({ menu }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState({});
  return (
    <Box
      display={"flex"}
      width="100%"
      flexDirection={"column"}
      id="bottomMenu"
      onMouseLeave={() => {
        onClose();
        setSelectedCategory({});
      }}
    >
      <Flex
        direction={"row"}
        borderTop={"1px solid rgba(188, 188, 188, 0.5)"}
        borderBottom={"1px solid rgba(188, 188, 188, 0.5)"}
        paddingInlineEnd={"30px"}
        paddingInlineStart={"30px"}
        width="100%"
        justifyContent={"space-between"}
        paddingTop={"10px"}
        paddingBottom={"10px"}
        fontWeight={500}
        fontSize={"0.875rem"}
      >
        {menu.map((cat, index) => (
          <Box
            key={index}
            textTransform={"uppercase"}
            _hover={{
              color: "black",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              fontWeight: "600",
            }}
          >
            <Link href={`/${cat.route}`}>
              <Box
                onMouseEnter={() => {
                  onOpen();
                  setSelectedCategory(cat);
                }}
                onClick={() => {
                  onClose();
                  setSelectedCategory({});
                }}
                cursor={"pointer"}
              >
                {cat.name}
              </Box>
            </Link>
          </Box>
        ))}
      </Flex>
      <Collapse
        in={isOpen}
        style={{
          position: "absolute",
          marginTop: 43,
          opacity: 1,
          zIndex: 2,
          width: "100%",
        }}
      >
        <Flex
          backgroundColor={"#f4f4f4"}
          width={"100%"}
          pt={"30px"}
          pb={"30px"}
          paddingInlineEnd={"30px"}
          paddingInlineStart={"30px"}
        >
          <CollapseMenu selectedCategory={selectedCategory} />
        </Flex>
      </Collapse>
    </Box>
  );
};

export default BottomMenu;
