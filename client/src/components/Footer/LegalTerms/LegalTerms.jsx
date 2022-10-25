import { Divider, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import styles from "./LegalTerms.module.css";

const LegalTerms = () => {
  return (
    <Flex justify={"center"}>
      <Flex className={styles.mainFlex}>
        <a
          href="https://www.contacto.lanacion.com.ar/tyc"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.menuItems}
        >
          Términos y condiciones
        </a>
        <Flex display={{ base: "none", lg: "block" }} height={"15px"}>
          <Divider
            orientation="vertical"
            borderStyle={"solid"}
            borderWidth={"0px 0px 0px 1px"}
            opacity={1}
            height={"100%"}
            borderColor={"#969696"}
            color={"#969696"}
            marginInlineEnd={"10px"}
            marginInlineStart={"10px"}
          />
        </Flex>
        <a
          href="https://www.lanacion.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.menuItems}
        >
          ¿Cómo anunciar?
        </a>

        <Divider
          orientation="vertical"
          display={{ base: "none", lg: "block" }}
          borderStyle={"solid"}
          borderWidth={"0px 0px 0px 1px"}
          opacity={1}
          height={"15px"}
          borderColor={"#969696"}
          color={"#969696"}
          marginInlineEnd={"10px"}
          marginInlineStart={"10px"}
        />
        <a
          href="https://www.somosohlala.com/nosotros/preguntas-frecuentes"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.menuItems}
        >
          Preguntas frecuentes
        </a>
      </Flex>
      <Flex className={styles.mainFlex}>
        <a
          href="http://qr.afip.gob.ar/?qr=HJMakbCpenWNdXYfqXtEDQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/footer-data-fiscal.png"
            height={"38px"}
            width={"28px"}
            alt={"Data fiscal"}
            marginBottom={{ base: "12px", lg: "0px" }}
            marginLeft={{ base: "0px", lg: "24px" }}
            marginRight={"10px"}
          />
        </a>
        <Flex direction={{ base: "column", lg: "row" }}>
          <p className={styles.plainText}>Copyright 2022 SA LA NACION</p>
          <Divider
            orientation="vertical"
            display={{ base: "none", lg: "block" }}
            borderStyle={"solid"}
            borderWidth={"0px 0px 0px 1px"}
            opacity={1}
            height={"16px"}
            borderColor={"#969696"}
            color={"#969696"}
            marginInlineEnd={"10px"}
            marginInlineStart={"10px"}
          />
          <p className={styles.plainText}>Todos los derechos reservados.</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LegalTerms;
