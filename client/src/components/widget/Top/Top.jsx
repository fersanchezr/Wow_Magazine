import { Flex, Heading, Text } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { greeting } from "../Greeting/greeting";

const Top = () => {

  return (
    <Flex
      width="100%"
      h={"auto"}
      justifyContent={"center"}
      align={"center"}
      pt={"1rem"}
      direction={"row"}
    >
      <Flex
        width={{ base: "300px", md: "400px" }}
        direction={"column"}
        justify={"flex-end"}
        align={"flex-end"}
        marginRight={{ base: "60%", lg: "-60%" }}
        marginBottom={{ base: "-6%", lg: "-5%", xl: "-4.5%", xxl: "-3%" }}
        // pl={{ base: "-10%" }}
      >
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_s00z9gco.json"
          // style={{ margin: "-51px" }}
        ></Player>
      </Flex>
      <Flex
        pos="absolute"
        pl={{ base: "250px", md: "380px", lg: "50px" }}
        pt={{ base: "40px", md: "30px", lg: "80px", xl: "30px" }}
        flexDirection="column"
        pr={{ lg: "350px", xl: "450px", xxl: "500px" }}
        ml={{ base: "-80px", md: "-30px", lg: "100px" }}
        mt={{ base: "-35px" }}
      >
        <Heading fontSize={{ base: "4.5vw", lg: "3.5vw", xl: "45px" }}>
          <span> ¡{greeting()}, </span>
          <span style={{ color: "#ED2D6E" }}>wower!</span>
        </Heading>
        <Heading
          as={"p"}
          fontSize={{ base: "3.5vw", lg: "2.75vw", xl: "35px" }}
          fontWeight="400"
        >
          ¿Cómo te sientes hoy?
        </Heading>
        <Heading
          as={"p"}
          fontSize={{ base: "3.5vw", lg: "2.75vw", xl: "35px" }}
          fontWeight="400"
        >
          Elige el
          <span style={{ color: "#ED2D6E" }}> emoji </span>
          que te represente hoy y te mostraré notas que van a interesarte
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Top;
