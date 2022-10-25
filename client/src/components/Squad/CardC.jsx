import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";
import { ArrowLeft } from "../../../public/assets/icons";
import Link from "next/link";
import { titleToSlug } from "../../../hooks/titleToSlug";

const CardC = ({ data, color }) => {
  const titleRouteMain = `${titleToSlug(data.Title)}-${data._id}`;
  return (
    <Flex height={"100%"}>
      <Flex
        direction={{ lg: "column" }}
        marginInline={{ base: "28px", lg: "0px" }}
        border={{ lg: `2px solid ${color}` }}
        borderRadius={{ lg: "10px" }}
        // borderImage={{ lg: "none 100% / 1 / 0 stretch" }}
        background={"none"}
        width={"100%"}
        borderTop={{ base: "0.6px solid rgb(210, 210, 210)", lg: "auto" }}
        borderBottom={{ base: "0.6px solid rgb(210, 210, 210)", lg: "auto" }}
        pt={{ base: "15px", lg: "0px" }}
        pb={{ base: "15px", lg: "0px" }}
      >
        <Flex
          direction={{ lg: "column" }}
          marginInline={{ lg: "0px" }}
          justifyContent={"center"}
          position={"relative"}
          overflow={"hidden"}
          borderRadius={{ base: "8px", lg: "8px 8px 0px 0px" }}
          minWidth={{ lg: "255px" }}
          maxHeight={{ lg: "280px" }}
          width={{ base: "calc(47.6923%)", lg: "100%" }}
          height={{ base: "auto", lg: "500px" }}
          flex={"0 0 calc(47.6923%)"}
          paddingTop={{ base: "calc(51.9231%)", lg: "0px" }}
        >
          <Image
            src={data.MainImage.url}
            objectFit={"cover"}
            position={"absolute"}
            display={"block"}
            width={"auto"}
            height={"100%"}
            top={"0px"}
            backgroundSize={"contain"}
            maxW={"initial"}
            minW={"100%"}
          />
        </Flex>
        <Flex
          color={"#1A202C"}
          direction="column"
          align={"flex-start"}
          mt={{ base: "0px" }}
          mb={{ base: "0px" }}
          ml={{ base: "14px" }}
          margin={{ lg: "30px 32px 30px 24px" }}
        >
          <Flex
            width={{ base: "100%", lg: "auto" }}
            max-width={"100%"}
            position={"relative"}
            align="center"
            pl={"7px"}
            pr={"30px"}
            background={"#F7CD93"}
            borderRadius={"4px"}
          >
            <Link href={`/${data.route}/${titleRouteMain}`}>
              <a>
                <Box
                  as="span"
                  width={{ base: "125px", lg: "100%" }}
                  textOverflow={"ellipsis"}
                  fontWeight={600}
                  fontSize={{ base: "0.75rem", lg: "0.8125rem" }}
                  lineHeight={"28px"}
                  textTransform={"uppercase"}
                  display={"block"}
                >
                  {`${data.author.firstname} ${data.author.lastname}`}
                </Box>
                <Box as="span" position={"absolute"} top={"0px"} right={"7px"}>
                  <ArrowLeft
                    width={{ base: "11px", lg: "14px" }}
                    height={"13px"}
                    fill={"none"}
                  />
                </Box>
              </a>
            </Link>
          </Flex>
          <Link href={`/${data.route}/${titleRouteMain}`}>
            <a>
              <Heading
                _hover={{
                  textDecoration: `underline 1px ${color}`,
                  textUnderlinePosition: "under",
                }}
                fontWeight={700}
                fontSize={{ base: "18px", lg: "20px" }}
                lineHeight={"26px"}
                marginTop={"12.5px"}
              >
                {data.Title}
              </Heading>
              <Text
                display={{ base: "none", lg: "block" }}
                fontSize={"14px"}
                fontWeight={400}
                mt={"10px"}
                height={"130px"}
              >
                {data.Body.slice(0, 150) + "..."}
              </Text>
            </a>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardC;
