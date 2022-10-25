import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
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
    <Box
      id="searchBar"
      display={"none"}
      h={"43px"}
      w="100%"
      backgroundColor={"#f4f4f4"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <form
        style={{ width: "100%", maxWidth: "544px", height: "40px" }}
        onSubmit={handleSubmit}
      >
        <Input
          onChange={onChange}
          value={inputValue}
          placeholder="Buscar"
          _focus={{
            borderBottom: "2px solid #e32b6c",
          }}
          _hover={{ borderBottom: "2px solid black" }}
          focusBorderColor={"transparent"}
          width={"100%"}
          fontSize={"0.889rem"}
          paddingInlineEnd={"2.5rem"}
          height={"35px"}
          borderBottom={"2px solid black"}
          borderTop={"none"}
          borderLeft={"none"}
          borderRight={"none"}
          textAlign={"center"}
          borderRadius={"0px"}
          outline={"2px solid transparent"}
          outlineOffset={"2px"}
          appearance={"none"}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
