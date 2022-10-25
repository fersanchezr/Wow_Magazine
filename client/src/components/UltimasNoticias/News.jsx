import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { titleToSlug } from "../../../hooks/titleToSlug";
import { useState, useEffect } from "react";
import axios from "axios";

const News = ({ data, banners }) => {

  const [num, setNum] = useState(0);
  const [forceData, setForceData] = useState({})
  const [titleRoute, setTitleRoute] = useState([])

  useEffect(() => {
    setInterval(
      (arr) => {
        let randomAd = Math.floor(Math.random() * arr.length);
        setNum(randomAd);
      },
      20000,
      banners,
    );
    data.Content[0] && setTitleRoute(data.Content.map(
      (ele) => `${titleToSlug(ele.Title.trim())}-${ele._id}`,
    ))
    data.Content[0] || axios.get("http://localhost:1337/notes?route_contains=ultimas-noticias&_start=0&_limit=3").then((res) => {
      setForceData(res.data)
      let title = res.data.map(
        (ele) => `${titleToSlug(ele.Title.trim())}-${ele._id}`,
      );
      setTitleRoute(title)
    })
  }, []);
  const content = data.Content[0] ? data.Content : forceData

  return (
    <Flex w={"100%"} align={"center"} justify={"center"}>
      <Grid
        gridTemplateColumns={{ xl: "920px auto" }}
        gridGap={{ lg: "20px" }}
        w={"100%"}
        maxWidth={"1250px"}
      >
        <GridItem>
          <Box>
            <Flex
              color="#EB522D"
              alignItems="center"
              p="10px"
              fontSize={{ base: "20px", lg: "24px" }}
            >
              <Image src={data.Icon} alt="logo" />
              <Text ml="10px" mt="15px" textTransform="uppercase">
                {data.Name}
              </Text>
            </Flex>
          </Box>
          <Flex width="100%" justifyContent="center" flexDirection="column">
            <GridItem
              position="relative"
              width="100%"
              height="auto"
              marginBottom="1rem"
              gridColumn="span 6/span 6"
            >
             <Link href={`/${content[0]?.route}/${titleRoute[0]}`}>
                <a>
                  <Flex
                    flexDirection="column"
                    width="100%"
                    height="100%"
                    overflow="hidden"
                    alignItems="center"
                  >
                    <Image
                      src={content[0]?.MainImage.url}
                      objectFit="cover"
                      backgroundSize="cover"
                      minHeight="70vh"
                      width={"100%"}
                    />
                    <Box
                      p="2rem"
                      zIndex="3"
                      bottom="5px"
                      color="white"
                      position="absolute"
                    >
                      <Text
                        as="span"
                        fontSize={{ base: "25px", lg: "30px" }}
                        fontFamily="var(--chakra-fonts-heading)"
                      >
                        <Text as="span" fontWeight="bold">
                          {content[0]?.Title}
                        </Text>
                        {content[0]?.secondaryTittle}
                      </Text>

                      <Divider
                        orientation="horizontal"
                        opacity="0.6"
                        borderBottomWidth="1px"
                        width="24px"
                        height="1px"
                        marginBottom="1rem"
                        marginTop="1rem"
                      />
                      <Text as="h6" fontSize="14px">
                        por <strong>{content[0]?.author.firstname}</strong>
                      </Text>
                    </Box>
                  </Flex>
                </a>
              </Link>
            </GridItem>
            <Grid
              templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2, 1fr)" }}
              gap={4}
            >
              <GridItem
                overflow="hidden"
                _hover={{
                  textDecoration: "underline",
                  textDecorationColor: `${data.Color}`,
                }}
              >
                <Link href={`/${content[1]?.route}/${titleRoute[1]}`}>
                  <a>
                    <Image src={content[1]?.MainImage.url} />
                    <Box p="2rem" zIndex="3" bottom="0px">
                      <Text
                        as="span"
                        fontSize="20px"
                        fontFamily="var(--chakra-fonts-heading)"
                      >
                        <Text as="span" fontWeight="bold">
                          {content[1]?.Title}
                        </Text>
                        {content[1]?.secondaryTittle}
                      </Text>

                      <Divider
                        borderColor="#ED2D6E"
                        orientation="horizontal"
                        opacity="0.6"
                        borderBottomWidth="1px"
                        width="24px"
                        height="1px"
                        marginBottom="1rem"
                        marginTop="1rem"
                      />
                      <Text as="h6" fontSize="14px" color="#8a8b8e">
                        por <strong>{content[1]?.author.firstname}</strong>
                      </Text>
                    </Box>
                  </a>
                </Link>
              </GridItem>

              <GridItem
                overflow="hidden"
                _hover={{
                  textDecoration: "underline",
                  textDecorationColor: `${data.Color}`,
                }}
              >
                <Link href={`/${content[2]?.route}/${titleRoute[2]}`}>
                  <a>
                    <Image src={content[2]?.MainImage.url} />
                    <Box p="2rem" zIndex="3" bottom="0px">
                      <Text
                        as="span"
                        fontSize="20px"
                        fontFamily="var(--chakra-fonts-heading)"
                      >
                        <Text as="span" fontWeight="bold">
                          {content[2]?.Title}
                        </Text>
                        {content[2]?.secondaryTittle}
                      </Text>

                      <Divider
                        borderColor="#ED2D6E"
                        orientation="horizontal"
                        opacity="0.6"
                        borderBottomWidth="1px"
                        width="24px"
                        height="1px"
                        marginBottom="1rem"
                        marginTop="1rem"
                      />
                      <Text as="h6" fontSize="14px" color="#8a8b8e">
                        por <strong>{content[2]?.author.firstname}</strong>
                      </Text>
                    </Box>
                  </a>
                </Link>
              </GridItem>
            </Grid>
          </Flex>
        </GridItem>
        <GridItem
          pt={"30px"}
          display={{ base: "none", xl: "flex" }}
          alignItems={"flex-start"}
        >
          <Image
            src={banners[num].url}
            alt={"publicidad sticky"}
            position={"sticky"}
            top={"115px"}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default News;
