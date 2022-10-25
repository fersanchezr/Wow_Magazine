import { Flex, Grid, GridItem, Box } from "@chakra-ui/react";
import styles from "./Menu.module.css";
import Link from "next/link";
import data from "./data.json";

const Menu = () => {
  return (
    <Flex
      align={{ base: "center", lg: "flex-start" }}
      justify={{ base: "center", lg: "flex-start" }}
    >
      <Grid
        className={styles.mainGrid}
        templateRows={"auto 1fr"}
        templateColumns={"1fr"}
        placeSelf={"start"}
      >
        <GridItem>
          <p className={styles.titleFlex}>NOSOTROS</p>
        </GridItem>
        <GridItem>
          <Flex direction={"column"}>
            <a
              href="https://www.somosohlala.com/nosotros/manifiesto-ohlala"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuItems}
            >
              Manifiesto WOW!
            </a>
            <a
              href="https://www.somosohlala.com/nosotros/contanos-tu-historia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuItems}
            >
              Contanos tu Historia
            </a>
          </Flex>
        </GridItem>
      </Grid>
      <Grid
        className={styles.mainGrid}
        templateRows={"auto 1fr"}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        placeSelf={"start"}
        columnGap={{ lg: "60px" }}
        marginLeft={{ lg: "60px" }}
        templateAreas={{
          base: `"Title" "Column1" "Column2"`,
          lg: `"Title Title" "Column1 Column2"`,
        }}
      >
        <GridItem area={"Title"}>
          <p className={styles.titleFlex}>DESCUBRÍ</p>
        </GridItem>
        <GridItem area={"Column1"}>
          <Flex direction={"column"}>
            {data.slice(0, 4).map((cat, i) => (
              <Box className={styles.menuItems} key={i}>
                <Link href={`${cat.url}`}>{cat.category}</Link>
              </Box>
            ))}
          </Flex>
        </GridItem>
        <GridItem area={"Column2"}>
          <Flex direction={"column"}>
            {data.slice(4).map((cat, i) => (
              <Box className={styles.menuItems} key={i}>
                <Link href={`${cat.url}`}>{cat.category}</Link>
              </Box>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Menu;
