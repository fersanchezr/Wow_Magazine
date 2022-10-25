import { Flex, Grid, GridItem, Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SectionTitle from "../../commons/SectionTitle";
import CardA from "./CardA";
import CardB from "./CardB";
import CardC from "./CardC";

const index = ({ data, banners }) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setInterval(
      (arr) => {
        let randomAd = Math.floor(Math.random() * arr.length);
        setNum(randomAd);
      },
      20000,
      banners,
    );
  }, []);
  return (
    <Flex w={"100%"} align={"center"} justify={"center"}>
      <Grid
        gridTemplateColumns={{ xl: "920px auto" }}
        gridGap={{ lg: "20px" }}
        w={"100%"}
        maxWidth={"1250px"}
      >
        <GridItem>
          <Box
            pt={{ base: "25px", xl: "30px" }}
            pb={{ base: "0px", lg: "30px", xl: "0px" }}
          >
            <SectionTitle
              icon={data.Icon}
              color={data.Color}
              title={data.Name}
            />
            <Grid
              templateAreas={{
                base: `"CardFirst"
        "CardSecond"
        "CardThird"
        `,
                lg: `"CardFirst CardThird"
        "CardSecond CardThird"`,
              }}
              gridTemplateColumns={{ lg: "1fr 260px" }}
              gridTemplateRows={{ lg: "auto auto" }}
              rowGap={{ base: "0px" }}
              gap={{ lg: "20px 40px" }}
              margin={{ lg: "28px" }}
            >
              <GridItem area={"CardFirst"}>
                <CardA data={data.Content[0]} color={data.Color} />
              </GridItem>
              <GridItem area={"CardSecond"}>
                <CardB data={data.Content[1]} color={data.Color} />
              </GridItem>
              <GridItem area={"CardThird"}>
                <CardC data={data.Content[2]} color={data.Color} />
              </GridItem>
            </Grid>
          </Box>
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

export default index;
